<?php include('header.php'); ?>
<div class="row">
    <div class="large-12 columns">
        <section>
            <h1>Affiliates..</h1>
            <p>This is an overview of all my friends, they also own collectives with great fanlistings! Pay them a visit and who knows, maybe they are hosting one or more of your favorite fanlistings! I am always looking for new friends, so if you own a collective &amp; would like to affiliate with me, you can e-mail me at fan [@] your-juliet.net or fill in the form on the <a href="contact.php">Contact page</a> and who knows, we can be affiliates! </p>
            <div class="text-center affiliates columns">
            <?php include 'config.php';
            include $path . 'show_collective_affiliates.php'; ?>
                </div>
        </section>
        <section>
            <h1>Link back..</h1>
            <p>If you need a button to link back here with, you can use a text link or one of these buttons. Please don't direct link, you can right-click on the image of your choose and select "Save image as" to save it to your own computer.</p>
            <div class="row">
                <div class="large-12 columns collective-codes text-center">
                    <?php

                    // CodeSort 2 codes
                    // subject: Whole Collective
                    error_reporting(E_NONE);
                    $listing = 0;

                    include('/home/robinuc147/domains/your-juliet.net/public_html/fan/codesort/show-codes.php');

                    ?>

                </div>
            </div>
        </section>
    </div>
</div>
<?php include('footer.php'); ?>