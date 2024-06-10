<nav>
    <div class="container">
<h1>Start walkthrough</h1>

    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/services">Services</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
    </div>
</nav>

<div class="container">
<slot />
</div>

<style>
    nav {
        background-color: mediumturquoise;
        padding: 0.5em;
    }
    .container {
        display: flex;
    }
    ul {
        display: flex;
        margin: 0;
        margin-left: auto;
        list-style: none;
        font-style: 1em;
    }
    li {
            margin-right: 20px;
    }
    h1 {
        margin: 0px;
        font-style: 1.3em;
        font-weight: normal;
    }
    a {
        text-decoration: none;
        color: black;
        font-weight: normal;
    }
</style>
