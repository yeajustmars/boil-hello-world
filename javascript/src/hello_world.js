(() => {
  const print_welcome_message = () => {
      // This variable is interpolated by
      // Boilermaker at build time, and its value is taken from the `boilermaker.toml` file.
      interpolated_message = "{{welcome_message}}";
      console.log(`${interpolated_message}`);
  }

  console.log("Hello boiled Javascript!");
  print_welcome_message();
})();
