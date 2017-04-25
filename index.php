<?php include('header.php'); ?>

<div class="row welcome">
    <div class="large-12 columns">

        <h1>Welcome..</h1>
        <?php
        include 'config.php';
        include ENTH_PATH . 'show_collective_stats.php';
        ?>
        <p>..to Obsessed, fanlisting collective of <a href="http://your-juliet.net" target="_blank">Robine</a>.
            Here you can view all the fanlistings I’ve joined &amp; own. If you find anything you are also a fan of please feel free to join the list &amp; share the love with the rest of the world!</p>
    </div>
</div>
<div class="row stats">
    <div class="large-12 columns">
        <h2>Statistics..</h2>
    </div>
    <div class="update columns large-4 large-offset-2">
        <ul>
            <li>Total Fanlistings Owned: <?php echo $owned_current ?></li>
            <li>Total Fanlistings Upcoming: <?php echo $owned_upcoming ?></li>
            <li>Newest Fanlisting Owned: <a href="<?php echo $owned_newest['url'] ?>" target="_blank"><?php echo $owned_newest['subject'] ?></a></li>
            <li>Total Members: <?php echo $collective_total_fans_approved ?></li>
            <li>Pending Members: <?php echo $collective_total_fans_pending ?></li>
        </ul>
    </div>
    <div class="update columns large-6">
        <ul>
            <li>Total Fanlistings Joined: <?php echo $joined ?></li>
            <li>Joined Fanlistings Pending: <?php echo $joined_pending ?></li>
            <li>Newest Fanlisting Joined: <a href="<?php echo $joined_newest['url'] ?>" target="_blank"><?php echo $joined_newest['subject'] ?></a></li>
            <li>Joined Growth Rate: <?php echo $joined_growth_rate ?></li>
            <li>Total Affiliates: <?php echo $affiliates_collective ?></li>
        </ul>
    </div>
</div>
<div class="row fanlisting">
    <div class="large-12 columns">
        <h2>Fanlisting..?</h2>

        <p>A fanlisting is simply an online list of fans of a subject, such as a TV show, actor, or musician, that is created by an individual and open for fans from around the world to join. There are no costs, and the only requirements to join a fanlisting are your name and country. Fanlistings do not have to be large sites (although some are); they are just a place where you can sign up with other fans. TheFanlistings.org is the original (but not official) web directory for fanlistings, dedicated to uniting the fans.</p>

    </div>
</div>

<div class="row updates">
    <div class="large-12 columns">
        <h2>Updates..</h2>
    </div>
    <div class="update columns large-4">
        <p class="date">March 17, 2016</p>
        <p>Wow, it was a long time since the last update, but I am happy to announce that I got approved for the <a href="http://fan.your-juliet.net/baymax" target="_blank">Big Hero 6: Baymax</a> fanlisting! This was one of my biggest wishlister &amp; I am going to take good care of it! Join if you also love Baymax :)</p>
    </div>
    <div class="update columns large-4">
        <p class="date">June 28, 2015</p>
        <p>My collective is finally ready to accept affiliates &amp; I have already found some lovely friends. I just finished making the <a href="http://fan.your-juliet.net/blacksails" target="_blank">Black Sails</a> &amp; <a href="http://fan.your-juliet.net/hyperbole" target="_blank">Hyperbole and a Half</a> fanlistings! I am now building one new fanlisting and that will the last one coming up for the coming time. Let me know if you want to affiliate via the <a href="http://fan.your-juliet.net/contact" target="_blank">contact page</a>!</p>
    </div>
    <div class="update columns large-4">
        <p class="date">June 8, 2015</p>
        <p>More than a month has passed and I have put up a lot more fanlistings! Some of my favorites are the <a href="http://fan.your-juliet.net/pirates" target="_blank">Pirates fanlisting</a>, the <a href="http://fan.your-juliet.net/hxb/" target="_blank">Hiro &amp; Baymax fanlisting</a> and the <a href="http://fan.your-juliet.net/wes/" target="_blank">Wes Anderson fanlisting</a>! I am also still looking for affiliates, so contact me via fan[@]your-juliet.net and we can talk soon!</p>
    </div>

</div>




<?php include('footer.php'); ?> 