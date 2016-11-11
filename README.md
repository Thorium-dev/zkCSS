# zkCSS - Gérez et maintenez facilement vos styles

<p>
    Dans cette bibliothèque destinée au css, vous disposez d'un système de grille responsive puissant et maintenable basé sur les flexbox. <br>
</p>

<h2>Prérequis</h2>
<ul>
    <li><a href='https://nodejs.org'>NodeJS</a></li>
    <li><a href='http://compass-style.org/install/'>Compass</a></li>
    <li>Gulp : <code>npm install -g gulp</code></li>
</ul>

<h2>Installation des dépendances</h2>
<p>
    La commande <code>npm install</code> permet de faire l'installation des dépendances qui se trouvent dans <code>package.json</code>.
</p>

<h2>Compilation du scss</h2>
<p>
    Par défaut, la commande <code>gulp</code> permet de faire la compilation du scss. <br>
    La compilation pour la <strong>prod</strong> se fait avec la commande <code>gulp prod</code>.
</p>

<h2>Utilisation des classes</h2>
<ul>
    <li>
        <code>_container</code> : Indique q'un élément est un conteneur. Sa largeur est la dernière valeur du tableau <code>$breakpoints</code> qui se trouve dans le fichier <code>_settings.scss</code>.
        Il est centré dans la page.
    </li>
    <li><code>_container-{nb_colonnes}</code> : Indique un conteneur avec le nombre de colonnes.</li>
    <li><code>_container-{taille_ecran}-{nb_colonnes}</code> : Indique un conteneur avec le nombre de colonnes en fonction de la taille de l'écran.</li>
    <li><code>_wrap</code> : Force le retour à la ligne.</li>
    <li><code>_nowrap</code> : Empêche le retour à la ligne.</li>
    <li><code>_align-top</code> : Alignement vertical vers le haut des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_align-center</code> : Alignement vertical vers le centre des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_align-bottom</code> : Alignement vertical vers le haut des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_pull-left</code> : Alignement horizontale vers la gauche des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_pull-center</code> : Alignement horizontale vers le centre des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_pull-right</code> : Alignement horizontale vers la droite des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_collapse</code> : </li>
    <li>
        <code>_box</code>, <code>_column</code> : Indiquent q'un élément est une colonne.
         On peut aligner verticalement cette colonne en utilisant les classes <code>_align-top</code>, <code>_align-center</code> et <code>_align-bottom</code> 
    </li>
    <li><code>_{taille_ecran}-hide</code> : Masque un élément en fonction de la taille de l'écran.</li>
    <li><code>_{taille_ecran}-show-block</code> : Affiche un élément en block en fonction de la taille de l'écran.</li>
    <li><code>_{taille_ecran}-show-inline</code> : Affiche un élément en ligne en fonction de la taille de l'écran.</li>
</ul>

<h2>Mixins</h2>
<p>
    Les mixins sont utilisées pour générer les propriétés css.
</p>
<h3><code>grid($columns: 5, $gutter: 2%, $breakpoints: 480 768 992 1200)</code></h3>
<ul>
    <li><code>$columns</code> : Nombre maximal de colonnes. Défaut : <code>5</code></li>
    <li><code>$gutter</code> : Valeur d'espacement entre les colonnes. Défaut : <code>2%</code></li>
    <li><code>$breakpoints</code> : Les points de rupture. Défaut : <code>480 768 992 1200</code></li>
</ul>

<h3><code>arrow( $size: 10px, $color: #fff, $position: 'down' )</code></h3>
<p>
    Dessine une flèche
</p>
<ul>
    <li><code>$size</code> : Taille de la flèche. Défaut : <code>10px</code></li>
    <li><code>$color</code> : Couleur de la flèche. Défaut : <code>#fff</code></li>
    <li>
        <code>$position</code> : Direction de la flèche. Défaut : <code>'down'</code>. <br>
        Les valeurs possibles sont :
        <code>'up'</code>, <code>'top'</code>, <code>'right'</code>, <code>'down'</code>, <code>'bttom'</code> et <code>'left'</code>
    </li>
</ul>
