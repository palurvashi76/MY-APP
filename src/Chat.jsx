import React, { Component } from "react";

class Chat extends Component {
  constructor(props) {
    super(props);
    // Initial state of the component [cite: 518]
    this.state = {
      serverUrl: "http://localhost:3001/",
      category: "laptops",
      isOpen: true,
    };
  }

  // --- Lifecycle Methods ---

  // Runs ONCE, after the component is first added to the screen
  componentDidMount() {
    this.setupConnection();
  }

  // Runs EVERY TIME the component updates (e.g., when state changes)
  componentDidUpdate(prevProps, prevState) {
    // Only reconnect if the server or category has actually changed
    if (
      prevState.category !== this.state.category ||
      prevState.serverUrl !== this.state.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  // Runs ONCE, just before the component is removed from the screen
  componentWillUnmount() {
    this.destroyConnection();
  }

  // --- Helper Methods ---

  setupConnection() {
    console.log(
      `✅ Connecting to ${this.state.serverUrl} for ${this.state.category}...`
    );
  }

  destroyConnection() {
    console.log("❌ Disconnected from server");
  }

  // --- Event Handlers ---

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  handleServerChange = (event) => {
    this.setState({ serverUrl: event.target.value });
  };

  toggleChat = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    if (!this.state.isOpen) {
      return (
        <button onClick={this.toggleChat} style={styles.openButton}>
          Open Chat
        </button>
      );
    }

    return (
      <div style={styles.chatWidget}>
        <h3>User Chat</h3>
        <label>Category: </label>
        <select
          value={this.state.category}
          onChange={this.handleCategoryChange}
        >
          <option value="laptops">Laptops</option>
          <option value="desktops">Desktops</option>
          <option value="smartphones">Smartphones</option>
        </select>
        <br /><br />
        <label>Server URL: </label>
        <input
          type="text"
          value={this.state.serverUrl}
          onChange={this.handleServerChange}
        />
        <br /><br />
        <button onClick={this.toggleChat} style={styles.closeButton}>
          Close Chat
        </button>
      </div>
    );
  }
}

// --- Styles (for cleaner JSX) ---

const styles = {
  chatWidget: {
    position: 'fixed', bottom: '20px', right: '20px',
    width: '250px', border: '1px solid gray', borderRadius: '10px',
    padding: '10px', backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  },
  openButton: {
    position: 'fixed', bottom: '20px', right: '20px',
    padding: '10px 20px', borderRadius: '10px', background: 'teal',
    color: 'white', border: 'none', cursor: 'pointer'
  },
  closeButton: {
    padding: '8px 15px', borderRadius: '8px', background: '#ee2400',
    color: 'white', border: 'none', cursor: 'pointer'
  }
};

export default Chat;