<div class="cursor"></div>
<div class="cursor2"></div>
<script src="/rfc-website/index.js"></script>
<div id="haut">
    <div id="haut_contenu">
        <img id="logo_top" src="/rfc-website/images/TrefleFBlanc.png">
        <nav>
            <ul>
                <li><a class="menu" <?= $current_page == 'home' ? 'id="current"' : ''?> href="home">Accueil</a></li>
                <li><a class="menu" <?= $current_page == 'team' ? 'id="current"' : ''?> href="team">Équipe</a></li>
                <li><a class="menu" <?= $current_page == 'divisions' ? 'id="current"' : ''?> href="divisions">Pôles</a></li>
                <li><a class="menu" <?= $current_page == 'progress' ? 'id="current"' : ''?> href="progress">Progrès</a> </li>
                <li><a class="menu" <?= $current_page == 'contact' ? 'id="current"' : ''?> href="contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</div>