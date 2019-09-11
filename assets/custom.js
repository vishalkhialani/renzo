$(document).on('DOMSubtreeModified', '.cpb-category-5OC-5AAVtfoeV3XhSKGYtX05.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span.option-type-img div div', function(e){
  var activeFlag = false;
  $('.cpb-category-5OC-5AAVtfoeV3XhSKGYtX05.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span.option').each(function() {
    if ($(this).hasClass('active')) {
      activeFlag = true;
    }
  })
  if (activeFlag === false) {
    $('.cpb-category-5OC-5AAVtfoeV3XhSKGYtX05.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span:first div').click();  
  }
});

$(document).on('DOMSubtreeModified', '.cpb-category-hymBms4vgvYC0xHNusnEywG6.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span.option-type-img div div', function(e){
  var activeFlag = false;
  $('.cpb-category-hymBms4vgvYC0xHNusnEywG6.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span.option').each(function() {
    if ($(this).hasClass('active')) {
      activeFlag = true;
    }
  })
  if (activeFlag === false) {
    $('.cpb-category-hymBms4vgvYC0xHNusnEywG6.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span:first div').click();
  }
});

$(document).on('DOMSubtreeModified', '.cpb-category-GmUO1avEaHzC72eyPQXD0Q0j.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span.option-type-img div div', function(e){
  var activeFlag = false;
  $('.cpb-category-GmUO1avEaHzC72eyPQXD0Q0j.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span.option').each(function() {
    if ($(this).hasClass('active')) {
      activeFlag = true;
    }
  })
  if (activeFlag === false) {
    $('.cpb-category-GmUO1avEaHzC72eyPQXD0Q0j.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span:first div').click();
  }
});


$(document).on('DOMSubtreeModified', '.cpb-category-onBFXLp0FnLkD6BOCh1Ch8yT.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span.option-type-img div div', function(e){
  var activeFlag = false;
  $('.cpb-category-onBFXLp0FnLkD6BOCh1Ch8yT.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span.option').each(function() {
    if ($(this).hasClass('active')) {
      activeFlag = true;
    }
  })
  if (activeFlag === false) {
    $('.cpb-category-onBFXLp0FnLkD6BOCh1Ch8yT.cpb-category-img.sc-RefOD.kIWYld .cpb-category-options-container span:first div').click();
  }
});

var cpbLoaded = function() {
  if ($('#product-builder .react-tabs__tab-list').length > 0) {
    $('#product-builder .react-tabs__tab-list').append('<li class="react-tabs__tab" id="custom_tab_dial" role="tab">Dial</li>')
    $('#product-builder .react-tabs__tab-list').append('<li class="react-tabs__tab" id="custom_tab_strap" role="tab">Strap</li>')
  } else {
    window.requestAnimationFrame(cpbLoaded);
  }
};

cpbLoaded();

$(document).on('click', '#product-builder .react-tabs__tab-list .react-tabs__tab', function() {
  $('#product-builder .react-tabs__tab-list .react-tabs__tab').removeClass('cpb-active');
  $(this).addClass('cpb-active');
});

$(document).on('click', '#react-tabs-0', function() {
  $('#product-builder .cpb-category.cpb-category-img').hide();
  $('.cpb-category-iZkEcmE2kJ1PHtK4tLTXBTdF').show();
});

$(document).on('click', '#custom_tab_dial', function() {
  $('#product-builder .cpb-category.cpb-category-img').hide();
  $('.cpb-category-5OC-5AAVtfoeV3XhSKGYtX05').show();
  $('.cpb-category-hymBms4vgvYC0xHNusnEywG6').show();
  $('.cpb-category-GmUO1avEaHzC72eyPQXD0Q0j').show();
  $('.cpb-category-onBFXLp0FnLkD6BOCh1Ch8yT').show();
});

$(document).on('click', '#custom_tab_strap', function() {
  $('#product-builder .cpb-category.cpb-category-img').hide();
  $('.cpb-category-aymKq2kE0zk4YjLhWiu9G6IZ').show();
});
