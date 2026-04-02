* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #fafafa;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

header {
    background: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.logo-text {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
}

header p {
    font-size: 1rem;
    opacity: 0.9;
}

.image-slider {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;
    margin: 20px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.slide.active {
    opacity: 1;
}

main {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    margin: 20px 0;
}

section {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

h2, h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

h2 {
    font-size: 1.5rem;
}

h3 {
    font-size: 1.25rem;
}

.services ul {
    padding-left: 20px;
    list-style: none;
}

.services li {
    margin: 10px 0;
    padding: 8px;
    background: #f8f9fa;
    border-left: 4px solid #3498db;
    border-radius: 4px;
}

.star {
    color: #ffd700;
    font-size: 18px;
    margin-right: 5px;
}

.review {
    margin: 15px 0;
    padding: 15px;
    background: #e8f4f8;
    border-radius: 8px;
    border-left: 4px solid #3498db;
}

.review p {
    margin: 5px 0;
}

.assistant input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.assistant input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
}

footer {
    text-align: center;
    padding: 15px;
    font-size: 0.9rem;
    color: #666;
    margin-top: 20px;
    border-top: 1px solid #ddd;
    background: #f8f9fa;
    border-radius: 0 0 10px 10px;
}
