const express = require('express')
const app = express()
app.use(express.json())

class BrowserHistory {
  constructor() {
    this.backStack = []
    this.forwardStack = []
    this.currentPage = null
  }

  visit(url) {
    if (this.currentPage !== null) {
      this.backStack.push(this.currentPage)
    }
    this.currentPage = url
    this.forwardStack = []
    return `Visited: ${this.currentPage}`
  }

  back() {
    if (this.backStack.length === 0) {
      return 'Cannot go back, no history.'
    }
    this.forwardStack.push(this.currentPage)
    this.currentPage = this.backStack.pop()
    return `Went back to: ${this.currentPage}`
  }

  forward() {
    if (this.forwardStack.length === 0) {
      return 'Cannot go forward, no forward history.'
    }
    this.backStack.push(this.currentPage)
    this.currentPage = this.forwardStack.pop()
    return `Went forward to: ${this.currentPage}`
  }

  getCurrentPage() {
    return `Current page: ${this.currentPage}`
  }
}

// Create a new instance of BrowserHistory
const browser = new BrowserHistory()

// API endpoints
app.post('/visit', (req, res) => {
  const { url } = req.body

  const result = browser.visit(url)
  res.json({ message: result })
})

app.get('/back', (req, res) => {
  const result = browser.back()
  res.json({ message: result })
})

app.get('/forward', (req, res) => {
  const result = browser.forward()
  res.json({ message: result })
})

app.get('/current', (req, res) => {
  const result = browser.getCurrentPage()
  res.json({ message: result })
})

// server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
