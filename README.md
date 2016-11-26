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
    <li><code>_{taille_ecran}-wrap</code> : Force le retour à la ligne en fonction de la taille de l'écran.</li>
    <li><code>_no-wrap</code> : Empêche le retour à la ligne.</li>
    <li><code>_{taille_ecran}-no-wrap</code> : Empêche le retour à la ligne en fonction de la taille de l'écran.</li>
    <li><code>_align-top</code> : Alignement vertical vers le haut des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_{taille_ecran}-align-top</code> : Alignement vertical vers le haut des enfants possédant la classe <code>_box</code> en fonction de la taille de l'écran.</li>
    <li><code>_align-center</code> : Alignement vertical vers le centre des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_{taille_ecran}-align-center</code> : Alignement vertical vers le centre des enfants possédant la classe <code>_box</code> en fonction de la taille de l'écran.</li>
    <li><code>_align-bottom</code> : Alignement vertical vers le haut des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_{taille_ecran}-align-bottom</code> : Alignement vertical vers le haut des enfants possédant la classe <code>_box</code> en fonction de la taille de l'écran.</li>
    <li><code>_pull-left</code> : Alignement horizontale vers la gauche des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_{taille_ecran}-pull-left</code> : Alignement horizontale vers la gauche des enfants possédant la classe <code>_box</code> en fonction de la taille de l'écran.</li>
    <li><code>_pull-center</code> : Alignement horizontale vers le centre des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_{taille_ecran}-pull-center</code> : Alignement horizontale vers le centre des enfants possédant la classe <code>_box</code> en fonction de la taille de l'écran.</li>
    <li><code>_pull-right</code> : Alignement horizontale vers la droite des enfants possédant la classe <code>_box</code>.</li>
    <li><code>_{taille_ecran}-pull-right</code> : Alignement horizontale vers la droite des enfants possédant la classe <code>_box</code> en fonction de la taille de l'écran.</li>
    <li><code>_collapse</code> : Colle les bords de la grille.</li>
    <li><code>_{taille_ecran}-collapse</code> : Colle les bords de la grille en fonction de la taille de l'écran.</li>
    <li><code>_no-collapse</code> : Ne colle pas les bords de la grille.</li>
    <li><code>_{taille_ecran}-no-collapse</code> : Ne colle pas les bords de la grille en fonction de la taille de l'écran.</li>
    <li><code>_hide</code> : Cache un élément.</li>
    <li><code>_{taille_ecran}-hide</code> : Cache un élément en fonction de la taille de l'écran.</li>
    <li><code>_show-block</code> : Affiche un élément sous forme de block.</li>
    <li><code>_{taille_ecran}-show-block</code> : Affiche un élément sous forme de block en fonction de la taille de l'écran.</li>
    <li><code>_show-inline</code> : Affiche un élément sous forme de ligne.</li>
    <li><code>_{taille_ecran}-show-inline</code> : Affiche un élément sous forme de ligne en fonction de la taille de l'écran.</li>
    <li>
        <code>_button</code> : Applique les styles pour obtenir un bouton.
    </li>
    <li>
        <code>_button-3d</code> : Applique les styles pour obtenir un bouton en 3D. Veillez à indiquer class <code>_button</code> en plus de cette class.
    </li>
</ul>


<h3>Classes pour les boxes ou colonnes</h3>
<p>
    On peut aligner verticalement les boxes ou colonnes en utilisant les classes <code>_align-top</code>, <code>_align-center</code> et <code>_align-bottom</code>
</p>
<ul>
    <li>
        <code>_box</code> : Indiquent q'un élément est une colonne ou une box.
    </li>
    <li>
        <code>_box-{taille}</code> : Modifie la largeur d'une boxe ou colonne.
    </li>
</ul>

<ul>
    <li>
        <code>_{taille_ecran}-box-{taille}</code> : Modifie la largeur d'une boxe ou colonne en fonction de la taille de l'écran.
    </li>
</ul>

<h3>Classes pour le <code>font-size</code></h3>
<p>
    Les classes utilisées pour le <code>font-size</code> se basent sur la variable <code>$font-sizes</code>.
    Par défaut, les tailles vont de <code>8px</code> à <code>50px</code>.
</p>
<ul>
    <li>
        <code>_f-s-{taille}</code> : Applique une taille de police.
    </li>
</ul>

<ul>
    <li>
        <code>_{taille_ecran}-f-s-{taille}</code> : Applique une taille de police en fonction de la taille de l'écran.
    </li>
</ul>

<h3>Classes pour le <code>margin</code></h3>
<p>
    Les classes utilisées pour le <code>margin</code> se basent sur la variable <code>$margins-paddings</code>.
    Les valeurs par défaut sont <code>5 10 15 20 25 30 35 40 45 50 auto</code>.
</p>
<ul>
    <li>
        <code>_m-{taille}</code> : Applique un <code>margin</code>
    </li>
    <li>
        <code>_m-t-{taille}</code> : Applique un <code>margin-top</code>
    </li>
    <li>
        <code>_m-r-{taille}</code> : Applique un <code>margin-right</code>
    </li>
    <li>
        <code>_m-b-{taille}</code> : Applique un <code>margin-bottom</code>
    </li>
    <li>
        <code>_m-l-{taille}</code> : Applique un <code>margin-left</code>
    </li>
</ul>

<ul>
    <li>
        <code>_{taille_ecran}-m-{taille}</code> : Applique un <code>margin</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-m-t-{taille}</code> : Applique un <code>margin-top</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-m-r-{taille}</code> : Applique un <code>margin-right</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-m-b-{taille}</code> : Applique un <code>margin-bottom</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-m-l-{taille}</code> : Applique un <code>margin-left</code> en fonction de la taille de l'écran.
    </li>
</ul>

<h3>Classes pour le <code>padding</code></h3>
<p>
    Les classes utilisées pour le <code>padding</code> se basent sur la variable <code>$margins-paddings</code>.
    Les valeurs par défaut sont <code>5 10 15 20 25 30 35 40 45 50 auto</code>.
</p>
<ul>
    <li>
        <code>_p-{taille}</code> : Applique un <code>padding</code>
    </li>
    <li>
        <code>_p-t-{taille}</code> : Applique un <code>padding-top</code>
    </li>
    <li>
        <code>_p-r-{taille}</code> : Applique un <code>padding-right</code>
    </li>
    <li>
        <code>_p-b-{taille}</code> : Applique un <code>padding-bottom</code>
    </li>
    <li>
        <code>_p-l-{taille}</code> : Applique un <code>padding-left</code>
    </li>
</ul>

<ul>
    <li>
        <code>_{taille_ecran}-p-{taille}</code> : Applique un <code>padding</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-p-t-{taille}</code> : Applique un <code>padding-top</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-p-r-{taille}</code> : Applique un <code>padding-right</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-p-b-{taille}</code> : Applique un <code>padding-bottom</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-p-l-{taille}</code> : Applique un <code>padding-left</code> en fonction de la taille de l'écran.
    </li>
</ul>

<h3>Classes pour le <code>color</code></h3>
<p>
    Les classes utilisées pour le <code>color</code> se basent sur les variables <code>$colors-name</code> et <code>$colors</code>.
</p>
<ul>
    <li>
        <code>_color-{nom_de_la_couleur}</code> : Applique une couleur.
    </li>
    <li>
        <code>_hover-color-{nom_de_la_couleur}</code> : Applique une couleur pour le hover.
    </li>
</ul>

<ul>
    <li>
        <code>_{taille_ecran}-color-{nom_de_la_couleur}</code> : Applique une couleur en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-hover-color-{nom_de_la_couleur}</code> : Applique une couleur pour le hover en fonction de la taille de l'écran.
    </li>
</ul>

<h3>Classes pour le <code>background-color</code></h3>
<p>
    Les classes utilisées pour le <code>background-color</code> se basent sur les variables <code>$colors-name</code> et <code>$colors</code>.
</p>
<ul>
    <li>
        <code>_bgc-{nom_de_la_couleur}</code> : Applique un <code>background-color</code>.
    </li>
    <li>
        <code>_hover-bgc-{nom_de_la_couleur}</code> : Applique un <code>background-color</code> pour le hover.
    </li>
</ul>

<ul>
    <li>
        <code>_{taille_ecran}-bgc-{nom_de_la_couleur}</code> : Applique un <code>background-color</code> en fonction de la taille de l'écran.
    </li>
    <li>
        <code>_{taille_ecran}-hover-bgc-{nom_de_la_couleur}</code> : Applique un <code>background-color</code> pour le hover en fonction de la taille de l'écran.
    </li>
</ul>








<h2>Mixins</h2>
<p>
    Les mixins sont utilisées pour générer les propriétés css.
</p>
<h3><code>grid($columns: 5, $gutter: 2%, $breakpoints: 480 768 992 1200)</code></h3>
<p>
    Dessine une grille responsive en fonction des valeurs du tableau <code>$breakpoint</code>.
</p>
<ul>
    <li><code>$columns</code> : Nombre maximal de colonnes. Défaut : <code>5</code></li>
    <li><code>$gutter</code> : Valeur d'espacement entre les colonnes. Défaut : <code>2%</code></li>
    <li><code>$breakpoints</code> : Les points de rupture. Défaut : <code>480 768 992 1200</code></li>
</ul>

<h3><code>arrow( $size: 10px, $color: #fff, $position: 'down' )</code></h3>
<p>
    Dessine une flèche.
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

<h3><code>button( $bgc: #6f5499 )</code></h3>
<p>
    Dessine un bouton.
</p>
<ul>
    <li><code>$bgc</code> : La couleur du bouton. Défaut : <code>#6f5499</code></li>
</ul>

<h3><code>button-color( $bgc: #6f5499 )</code></h3>
<p>
    Change la couleur d'un bouton. Cette mixin est à utiliser après l'utilisation de la mixin <code>button</code>.
</p>
<ul>
    <li><code>$bgc</code> : La couleur du bouton. Défaut : <code>#6f5499</code></li>
</ul>
