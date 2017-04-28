<logs>

  <h4>Logs</h4>

  <button onclick={opts.onclear}>
    Clear logs
  </button>

  <ul>
    <li each={ opts.logs }>{ text }</li>
  </ul>

  <script>
    this.generate = (e) => {
      this.logs.push({ text: `Generate button clicked. Even type is ${ e.type }` })
      this.number = Math.floor(Math.random()*10000)
    }
  </script>
</logs>