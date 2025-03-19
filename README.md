🔒 Industry-Standard Password Generator & Manager

Overview

This is a sleek and secure password generator and manager that creates industry-standard strong passwords and securely saves them. Users can:

  `1.Generate highly secure passwords.`

   `2.Save passwords with a custom name.`

   `3.Optionally link a URL to indicate where the password is used.`

  `4.Run the app natively on Linux Mint.`


🚀 Tech Stack

 ![HTM5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  



📂 Features

Generates secure passwords.

Stores passwords locally for easy access.

Simple and intuitive UI.

Fully responsive design.

Supports adding a URL reference for each password.


🛠 Installation & Running the App

1️⃣ Clone the Repository

    git https://github.com/Gathiaka-wiz/Password2.o
    cd  Password2.0

2️⃣ Running in a Web Browser

Simply open index.html in your preferred browser:

    xdg-open index.html   # Linux users
    open index.html       # macOS users
    double-click index.html # Windows users

🖥 Running the App Natively on Linux Mint

Prerequisites:

Ensure you have WebKit2GTK installed:

      sudo apt update && sudo apt install libwebkit2gtk-4.0-dev

Steps to Run as a Native Linux App

1. Install WebKitGTK-based dependencies

       sudo apt install gir1.2-webkit2-4.0 gir1.2-gtk-3.0

2. Create a launcher script Create a file named run-app.sh in the project folder:

       echo "#!/bin/bash\nwebkit2gtk-browser file://$(pwd)/index.html" > run-app.sh
       chmod +x run-app.sh

3. Run the App

       ./run-app.sh

(Optional) Creating a .desktop Shortcut

If you want to launch the app like a native program:

1. Create a .desktop file:
   
        touch ~/.local/share/applications/password-manager.desktop


2. Add this to the file and save:

       echo "[Desktop Entry]
       Name=Password Manager
       Exec=$(pwd)/run-app.sh
       Type=Application
       Icon=utilities-terminal
        Categories=Utility;" > ~/.local/share/applications/password-manager.desktop

4. Make it executable:

       chmod +x ~/.local/share/applications/password-manager.desktop

Now, search for Password Manager in your application menu!

📜 License

This project is licensed under the MIT License.

🤝 Contributions

Contributions are welcome! Feel free to submit issues and pull requests.

⭐ Show Some Love

If you find this useful, give it a star ⭐ on GitHub!

