export default function(aiportName) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nearest festival</title>
            <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
            <style>
                body {
                background: #eee;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                font-family: sans-serif;
                }
                div.container {
                background: #fff;
                border-radius: 1rem;
                padding: 4rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Your nearest festival is the ${aiportName}'s Music Festival!</h1>
            </div>
        </body>
    </html>`
}