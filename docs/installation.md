# Installation

## CutDetectorPro
CutDetectorPro itself is self contained and can run from where it was downloaded or copied to.
!!! info "Note"
    On macOS you may sometimes get a warning about a corrupt app bundle. To fix this, you can try the following:

    <figure>
      <iframe
        loading="lazy"
        src="https://www.youtube.com/embed/MEHFd0PCQh4"
        title="YouTube video"
        allowfullscreen>
      </iframe>
    </figure>

    Once this is released for good I will look into paying the fee to Apple to certify the app bundle properly so this should go away. 

## [Tesseract](https://tesseract-ocr.github.io/tessdoc/Installation.html)
Tesseract OCR is an open-source tool for extracting text from images.


??? info "Installing on Windows"
    ### :fontawesome-brands-windows: Windows
    1. Download installer
        - Get the official Windows build from UB Mannheim (most commonly used distribution):
        - [Tesseract Windows Installer](https://github.com/UB-Mannheim/tesseract/wiki?utm_source=chatgpt.com)
    2. Install
        * Run the installer
        * Choose install location (default is usually fine)
        *  Make sure “Add to PATH” is checked (important)
    3. Verify install 

    Open Command Prompt:

    ```
    tesseract --version
    ```

??? info "Installing on macOS"
    ### :fontawesome-brands-apple: macOS

    Option 1: Homebrew (recommended)

    If you don’t have Homebrew:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Install Tesseract:
    ```bash
    brew install tesseract
    ```
    Verify:
    ```bash
    tesseract --version
    ```


??? info "Installing on Linux"
    ### :simple-linux: Linux

    === "apt"

        Installation:
        ```bash
        sudo apt update
        sudo apt install tesseract-ocr
        ```
    
        (Optional) install extra languages:
        ```bash
        sudo apt install tesseract-ocr-eng tesseract-ocr-fra
        ```

    === "dnf"

        Installation:
        ```bash
        sudo dnf update
        sudo dnf install tesseract-ocr
        ```
    
        (Optional) install extra languages:
        ```bash
        sudo dnf install tesseract-ocr-eng tesseract-ocr-fra
        ```

    Verify:
    ```
    tesseract --version
    ```

### Optional: Language Packs
Tesseract uses separate language data files.

- Windows: included in installer or added manually
- macOS/Linux:
```
sudo apt install tesseract-ocr-deu   # German example
```

Or download trained data files from [here](https://github.com/tesseract-ocr/tessdata)

---

## [ffmpeg](https://ffmpeg.org/download.html)
FFmpeg is a command-line tool for converting, recording, and processing audio/video.

??? info "Installing on Windows"
    ### :fontawesome-brands-windows: Windows

??? info "Installing on macOS"
    ### :fontawesome-brands-apple: macOS

??? info "Installing on Linux"
    ### :simple-linux: Linux
