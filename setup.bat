@echo off
title G4U Website Setup

echo ==========================================
echo        G4U Website Local Setup
echo ==========================================
echo.

echo [1/3] Checking Node.js...
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Node.js is not installed.
    echo Please install Node.js LTS from:
    echo https://nodejs.org/
    echo.
    pause
    exit /b
)

echo Node.js detected:
node -v
npm -v

echo.
echo [2/3] Installing project dependencies...
call npm install

IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo Failed to install dependencies.
    pause
    exit /b
)

echo.
echo [3/3] Starting development server...
echo.
echo When the Local URL appears,
echo hold Ctrl and click the link to open the website.
echo.

call npm run dev

pause
```
