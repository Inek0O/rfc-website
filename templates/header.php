<div class="cursor"></div>
<div class="cursor2"></div>
<script src="./index.js"></script>
<div id="banner">
    <img id="logo_top" src="./images/Top_Frame 6.png">
</div>
<div id="haut">
    <nav>
        <ul>
            <li><a class="menu" <?= $current_page == 'home' ? 'id="current"' : ''?> href="<?=$base?>/">Accueil</a></li>
            <li><a class="menu" <?= $current_page == 'team' ? 'id="current"' : ''?> href="<?=$base?>/team">Équipe</a></li>
            <li><a class="menu" <?= $current_page == 'divisions' ? 'id="current"' : ''?> href="<?=$base?>/divisions">Pôles</a></li>
            <li><a class="menu" <?= $current_page == 'progress' ? 'id="current"' : ''?> href="<?=$base?>/progress">Progrès</a> </li>
            <li><a class="menu" <?= $current_page == 'contact' ? 'id="current"' : ''?> href="<?=$base?>/contact">Contact</a></li>
        </ul>
    </nav>
</div>