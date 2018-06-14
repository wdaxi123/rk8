$.ajax({
    url: '/api/list',
    dataType: 'json',
    success: function(data) {
        console.log(data)
        var source = $('#list').html();
        //$360Sectionconsole.log(source);
        var compile = Handlebars.compile(source);
        //console.log(compile)
        //console.log(JSON.stringify(data))
        var html = compile(data);
        //console.log(html)
        $('.list').html(html);
    }
})