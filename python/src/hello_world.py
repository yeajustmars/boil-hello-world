def print_welcome_message():
    # This variable is interpolated by
    # Boilermaker at build time, and its value is taken from the `boilermaker.toml` file.
    interpolated_message = "{{welcome_message}}";
    print("{interpolated_message}");

def main():
    print("Hello boiled Python!");
    print_welcome_message();

if __name__ == "__main__":
    main()
