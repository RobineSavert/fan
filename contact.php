<?php include('header.php'); ?>
	<div class="row">
		<div class="large-12 columns">
            <section>
                <h1>Contact..</h1>
                <p>You can contact me by e-mailing me at fan [@] your-juliet.net or you can contact me by using the contact form below. I would love to hear from you!</p>
            </section>
        </div>
    </div>
    <div class="row">
        <div class="large-8 columns">

            <?php
            $action=$_REQUEST['action'];
            if ($action=="")    /* display the contact form */
            {
                ?>
                <form  action="" method="POST" enctype="multipart/form-data" data-abide>

                    <div class="row collapse">
                        <div class="large-4 columns">
                            <input type="hidden" name="action" value="submit">
                            <label class="inline">Your name <small>(required)</small></label>
                        </div>
                        <div class="large-8 columns">
                            <input name="name" type="text" value="" />
                        </div>
                    </div>


                    <div class="row collapse">
                        <div class="large-4 columns">
                            <input type="hidden" name="action" value="submit">
                            <label class="inline">Your e-mail <small>(required)</small></label>
                        </div>
                        <div class="large-8 columns">
                            <input name="email" type="text" value="" />
                        </div>
                    </div>


                    <div class="row collapse">
                        <div class="large-4 columns">
                            <input type="hidden" name="action" value="submit">
                            <label class="inline">Your message <small>(required)</small></label>
                        </div>
                        <div class="large-8 columns">
                            <textarea name="message" rows="7" cols="30"></textarea>
                        </div>
                    </div>


                    <div class="row collapse">
                        <div class="large-4 columns large-centered">
                            <input type="submit" class="button expand" value="Send email"/>
                        </div>
                    </div>
                </form>
            <?php
            }
            else                /* send the submitted data */
            {
                $name=$_REQUEST['name'];
                $email=$_REQUEST['email'];
                $url=$_REQUEST['url'];
                $message=$_REQUEST['message'];
                if (($name=="")||($email=="")||($message==""))
                {
                    echo "All fields are required, please fill <a href=\"\">the form</a> again.";
                }
                else{
                    $from="From: $name<$email>\r\nReturn-path: $email";
                    $subject="Message sent using your contact form";
                    mail("fan@your-juliet.net", $subject, $message, $from);
                    echo "<center><i>Thank you for your message, I will respond to you shortly!</i></center>";
                }
            }
            ?>
        </div>
        <div class="large-4 columns">
            <i class="fa fa-envelope"></i> fan[@]your-juliet.net<br />
            <i class="fa fa-globe"></i> http://fan.your-juliet.net<br />
            <i class="fa fa-user"></i> 1624<br />
            <br />
            <br />
            <i>Do you need some codes for your fanlisting? You can request them via the contactform &amp; I can make you some if I have the time!</i>
        </div>
    </div>









<?php include('footer.php'); ?> 