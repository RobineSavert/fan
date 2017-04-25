<?php include('header.php'); ?>
	<div class="row">
		<div class="large-12 columns">
			<h1>Current..</h1>
			<p>These are all the fanlistings I absolutely adore &amp; own at the moment! If you love any of these subjects as well, please consider joining today :)</p>
		</div>
	</div>
	<div class="row fls">

		<?php include 'config.php';
		$status = 'current';
		$hide_dropdown = true;
		$show = 'all';
		include ENTH_PATH . 'show_owned.php'; ?>

	</div>



<?php include('footer.php'); ?> 