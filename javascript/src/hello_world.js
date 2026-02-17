(() => {
  const print_welcome_message = () => {
      // This variable is interpolated by
      // Boilermaker at build time, and its value is taken from the `boilermaker.toml` file.
      interpolatedMessage = "{{welcome_message}}";
      console.log(`${interpolatedMessage}`);
  }

  console.log("Hello boiled Javascript!");
  print_welcome_message();
})();
