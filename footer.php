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
		<a href="<?php echo esc_url('https://wordpress.org/'); ?>"><?php printf(esc_html('Proudly powered by %s'), 'WordPress'); ?></a>
		<section class="footer-qod">
			<ul>
				<Nav class="footer-nav">
					<li>
						<div class="about">About</div>
					</li>
					<li>
						<div class="archive">Archive</div>
					</li>
					<li>
						<div class="submit-a-quote">Submit a quote</div>
					</li>
				</Nav>
			</ul>
		</section>
	</div><!-- .site-info -->

</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>