*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{
background:#f4f7fb;
color:#222;
line-height:1.7;
}

.navbar{
background:#0f3d66;
padding:15px 6%;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:1000;
}

.logo-section{
display:flex;
align-items:center;
gap:10px;
color:white;
font-size:1.2rem;
font-weight:700;
}

.logo-section img{
height:55px;
}

.nav-links{
display:flex;
list-style:none;
gap:25px;
}

.nav-links a{
color:white;
text-decoration:none;
font-weight:500;
}

.nav-links a:hover

.hero{
background:linear-gradient(135deg,#0f3d66,#174c7c);
color:white;
padding:90px 6%;
}

.hero-content{
display:flex;
align-items:center;
justify-content:space-between;
gap:60px;
flex-wrap:wrap;
}

.hero-text{
flex:1;
min-width:320px;
}

.hero-text h1{
font-size:4rem;
margin-bottom:10px;
}

.hero-text h2{
color:#f4b400;
margin-bottom:20px;
}

.tagline{
font-size:1.8rem;
font-weight:700;
margin-bottom:20px;
}

.hero-image{
flex:1;
display:flex;
justify-content:center;
}

.hero-image img{
width:320px;
max-width:100%;
border-radius:20px;
border:5px solid white;
box-shadow:0 15px 40px rgba(0,0,0,.3);
}

.stats{
display:flex;
gap:20px;
margin:30px 0;
flex-wrap:wrap;
}

.stat-box{
background:white;
color:#0f3d66;
padding:20px;
border-radius:15px;
min-width:140px;
text-align:center;
box-shadow:0 8px 20px rgba(0,0,0,.15);
}

.btn-primary{
display:inline-block;
background:#f4b400;
color:black;
padding:14px 28px;
border-radius:10px;
text-decoration:none;
font-weight:700;
margin-right:10px;
}

.btn-secondary{
display:inline-block;
background:white;
color:#0f3d66;
padding:14px 28px;
border-radius:10px;
text-decoration:none;
font-weight:700;
}

section{
padding:80px 6%;
}

section h2{
text-align:center;
font-size:2.5rem;
color:#0f3d66;
margin-bottom:40px;
}

.features,
.services-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.feature-card,
.service-card{
background:white;
padding:25px;
border-radius:15px;
box-shadow:0 8px 20px rgba(0,0,0,.08);
transition:.3s;
}

.feature-card:hover,
.service-card:hover{
transform:translateY(-8px);
}

.about-content{
max-width:1000px;
margin:auto;
text-align:center;
font-size:1.1rem;
}

.achievement-container{
display:flex;
align-items:center;
gap:40px;
flex-wrap:wrap;
}

.achievement-container img{
width:380px;
max-width:100%;
border-radius:15px;
box-shadow:0 8px 20px rgba(0,0,0,.2);
}

.office-gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:25px;
}

.office-gallery img{
width:100%;
border-radius:15px;
box-shadow:0 8px 20px rgba(0,0,0,.15);
}

.office-info{
text-align:center;
margin-top:30px;
}

.faq-item{
background:white;
padding:20px;
margin-bottom:15px;
border-radius:15px;
box-shadow:0 8px 20px rgba(0,0,0,.08);
}

.contact-container{
display:flex;
gap:40px;
flex-wrap:wrap;
}

.contact-info,
.contact-form{
flex:1;
min-width:300px;
}

.contact-form form{
display:flex;
flex-direction:column;
gap:15px;
}

.contact-form input,
.contact-form textarea{
padding:14px;
border:1px solid #ccc;
border-radius:10px;
}

.contact-form button{
padding:14px;
background:#0f3d66;
color:white;
border:none;
border-radius:10px;
font-weight:700;
cursor:pointer;
}

.whatsapp-float{
position:fixed;
right:20px;
bottom:20px;
background:#25d366;
color:white;
padding:16px 22px;
border-radius:50px;
text-decoration:none;
font-weight:700;
box-shadow:0 10px 20px rgba(0,0,0,.25);
z-index:999;
}

footer{
background:#0f3d66;
color:white;
padding:30px;
text-align:center;
}

@media(max-width:768px){

.hero-text h1{
font-size:2.5rem;
}

.hero{
padding-top:60px;
}

.navbar{
flex-direction:column;
gap:15px;
}

.nav-links{
flex-wrap:wrap;
justify-content:center;
}

.hero-content{
text-align:center;
}

.hero-image img{
width:250px;
}

.stats{
justify-content:center;
}
}
