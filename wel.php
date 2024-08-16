<html>
    <head>
        <title>Home Screen</title>
        <link rel="stylesheet" href="style2.css">
<body>
    <div id="moving-element">
    <p>  Your Taste Your Decision!!</p>
    </div>
<script>
        const element = document.getElementById('moving-element');
        let position = 0;
        const speed = 2; 
        function moveElement() {
            position += speed;
            element.style.left = position + 'px';
            
            if (position >= window.innerWidth) {
                position = -50; 
            }
            requestAnimationFrame(moveElement);
        }
        moveElement();
        </script>

<div class="container">
<div class="page">
    <h1>Welcome to <span>Swaadisht</span></h1>
    <h2>You have Loggedin Successfully</h2>
<div class="banner-btn">
            <a href="hotbreads.html"><span></span>HOT BREADS</a>
            <a href="index.html"><span></span>NITHYA AMIRTHAM</a>
            

        </div>
</div>
</div>
<script src="script.js"></script>
</body>
</html>
