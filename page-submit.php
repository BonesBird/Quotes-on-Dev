<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

        <section class="quote-submission">
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title>', '</h1>'); ?>
            </header>

            <?php if (is_user_logged_in() && current_user_can('edit_posts')) : ?>

                <div class="quote-submission-wrapper">
                    <form name="quoteForm" id="quote-sub-form">
                        <div>
                            <label form="quote-author">Author of Quote</label>
                            <input type="text" name="quote_author" id="quote-author">
                        </div>


                        <div>
                            <label form="quote-content">Content</label>
                            <textarea rows="3" cols="20" name="quote_content" id="quote-content"></textarea>
                        </div>
                        <div>
                            <label form="quote-source">Where did you find this quote? (e.g book name)</label>
                            <input type="text" id="quote-source"></textarea>
                        </div>
                        <div class="subjet-test">
                            <label form="quote-source-url">Provide the URL source of the quote</label>
                            <input type="url" name="quote-source-url" id="quote-source-url"></textarea>
                        </div>
                        <input type="submit" value="Submit Quote">
                    </form>
                    <p class="submit-message-success" style="display:none;">Thanks for the awsome quote.</p>

                <?php else : ?>
                    <p>Sorry, you must be logged in to submit a quote.</p>
                    <a href="<?php echo wp_login_url(); ?>">
                    <?php endif; ?>
        </section>
    </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer(); ?>