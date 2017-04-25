<div id="footer">
    <footer>
        <div class="row">
            <div class="large-12 columns text-center">
                <p>Part of <a href="http://your-juliet.net" target="_blank">Your-Juliet.net</a>    |
                    Scripts <a href="http://scripts.indisguise.org/enthusiast/" target="_blank">Enthusiast</a> &amp;
                    <a href="http://fanupdate.net/codesort.php" target="_blank">CodeSort</a>    |
                    Powered by <a href="http://thefanlistings.org/" target="_blank">TFL.org</a></p>
            </div>
        </div>
    </footer>
</div>




<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/foundation/js/foundation.min.js"></script>
<script src="js/app.js"></script>
<script>
    $(window).bind("load", function () {
        var footer = $("#footer");
        var pos = footer.position();
        var height = $(window).height();
        height = height - pos.top;
        height = height - footer.height();
        if (height > 0) {
            footer.css({
                'margin-top': height + 'px'
            });
        }
    });
</script>
</body>
</html>
