<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="site-info">
		<nav id="site-navigation" class="main-navigation" role="navigation">

			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" style=""><?php echo esc_html('Primary Menu'); ?></button>
			<?php wp_nav_menu(array('theme_location' => 'primary', 'menu_id' => 'primary-menu'));
			?>

			<span style="padding-left: 31px; line-height: 3.3; display: inline-flex ;">Brought to you by<a href="https://www.redacademy.com/" style="color:green;"></span>
			<span style="padding-left: 10px; line-height: 3.3; display: inline-flex ;"> Academy</a></span>

		</nav>
		<!-- #site-navigation -->

	</div><!-- .site-info -->


</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>