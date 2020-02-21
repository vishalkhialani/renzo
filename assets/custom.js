$(document).on('DOMSubtreeModified', '.cpb-category-5OC-5AAVtfoeV3XhSKGYtX05.cpb-category-img .cpb-category-options-container span.option-type-img div div', function (e) {
  var activeFlag = false;
  $('.cpb-category-5OC-5AAVtfoeV3XhSKGYtX05.cpb-category-img .cpb-category-options-container span.option').each(function () {
    if ($(this).hasClass('active')) {
      activeFlag = true;
    }
  })
  if (activeFlag === false) {
    $('.cpb-category-5OC-5AAVtfoeV3XhSKGYtX05.cpb-category-img .cpb-category-options-container span:first div').click();

  }
});

$(document).on('DOMSubtreeModified', '.cpb-category-hymBms4vgvYC0xHNusnEywG6.cpb-category-img .cpb-category-options-container span.option-type-img div div', function (e) {
  var activeFlag = false;
  $('.cpb-category-hymBms4vgvYC0xHNusnEywG6.cpb-category-img .cpb-category-options-container span.option').each(function () {
    if ($(this).hasClass('active')) {
      activeFlag = true;
    }
  })
  if (activeFlag === false) {
    $('.cpb-category-hymBms4vgvYC0xHNusnEywG6.cpb-category-img .cpb-category-options-container span:first div').click();
  }
});

$(document).on('DOMSubtreeModified', '.cpb-category-GmUO1avEaHzC72eyPQXD0Q0j.cpb-category-img .cpb-category-options-container span.option-type-img div div', function (e) {
  var activeFlag = false;
  $('.cpb-category-GmUO1avEaHzC72eyPQXD0Q0j.cpb-category-img .cpb-category-options-container span.option').each(function () {
    if ($(this).hasClass('active')) {
      activeFlag = true;
    }
  })
  if (activeFlag === false) {
    $('.cpb-category-GmUO1avEaHzC72eyPQXD0Q0j.cpb-category-img .cpb-category-options-container span:first div').click();
  }
});


$(document).on('DOMSubtreeModified', '.cpb-category-onBFXLp0FnLkD6BOCh1Ch8yT.cpb-category-img .cpb-category-options-container span.option-type-img div div', function (e) {
  var activeFlag = false;
  $('.cpb-category-onBFXLp0FnLkD6BOCh1Ch8yT.cpb-category-img .cpb-category-options-container span.option').each(function () {
    if ($(this).hasClass('active')) {
      activeFlag = true;
    }
  })
  if (activeFlag === false) {
    $('.cpb-category-onBFXLp0FnLkD6BOCh1Ch8yT.cpb-category-img .cpb-category-options-container span:first div').click();

  }
});


var cpbLoaded = function () {
  if ($('#product-builder .react-tabs__tab-list').length > 0) {
    $('#product-builder .react-tabs__tab-list li').first().text("1 - CASE")
    $('#product-builder .react-tabs__tab-list').append('<li class="react-tabs__tab" id="custom_tab_dial" role="tab">2 - DIAL</li>')
    $('#product-builder .react-tabs__tab-list').append('<li class="react-tabs__tab" id="custom_tab_strap" role="tab">3 - STRAP</li>')
  } else {
    window.requestAnimationFrame(cpbLoaded);
  }
};

cpbLoaded();


$(document).on('click', '#product-builder .react-tabs__tab-list .react-tabs__tab', function () {
  $('#product-builder .react-tabs__tab-list .react-tabs__tab').removeClass('cpb-active');
  $(this).addClass('cpb-active');
});

$(document).on('click', '#react-tabs-0', function () {
  $('#product-builder .cpb-category.cpb-category-img').hide();
  $('.cpb-category-iZkEcmE2kJ1PHtK4tLTXBTdF').show();
});

$(document).on('click', '#custom_tab_dial', function () {
  $('#product-builder .cpb-category.cpb-category-img').hide();
  $('.cpb-category-5OC-5AAVtfoeV3XhSKGYtX05').show();
  $('.cpb-category-hymBms4vgvYC0xHNusnEywG6').show();
  $('.cpb-category-GmUO1avEaHzC72eyPQXD0Q0j').show();
  $('.cpb-category-onBFXLp0FnLkD6BOCh1Ch8yT').show();
});

$(document).on('click', '#custom_tab_strap', function () {
  $('#product-builder .cpb-category.cpb-category-img').hide();
  $('.cpb-category-aymKq2kE0zk4YjLhWiu9G6IZ').show();
});


setTimeout(function () {
  // Click case first
  $('.cpb-category.iZkEcmE2kJ1PHtK4tLTXBTdF .cpb-category-options-container span:first').click();
  $('.cpb-category.aymKq2kE0zk4YjLhWiu9G6IZ .cpb-category-options-container span:first').click();

}, 300);



$(document).on('click', '.option-type-img', function () {
  let div_metafield = document.getElementById('metafield_content');
  let image_child = this.querySelector('.cpb-option-type-img span img');
  let parentNode = this.parentElement.parentElement.parentElement.querySelector('.cpb-category-title span');
  let parrentTitle = this.parentElement.parentElement.parentElement.querySelector('.cpb-category-title .sc-eTuwsz');

  // console.log (parrentTitle[0]);
  // Title group text case/dial/strap
  let title = parentNode.textContent;
  // console.log (title);
  // if($("#product-category-custom-"+title).length == 0 ) {
  //     let content_add_title = '<span class="product-title-custom" id="product-category-custom-'+title + '"></span>';
  //     parrentTitle.insertAdjacentHTML ('afterend',content_add_title);
  //     let number =  getNumberTitle(title);
  //     console.log ('num' + number);
  //     $("#product-category-custom-"+title).text(number + '-'+title.toUpperCase());
  // } else {
  //   let number =  getNumberTitle(title);
  //     console.log ('num' + number);
  //     $("#product-category-custom-"+title).text(number + '-'+title.toUpperCase());
  // }
  // Can't use case text becasue mutiple click 
  let cateText = $(".react-tabs__tab.cpb-active").text().trim().toLowerCase();
  // console.log ('cate text');
  // console.log (cateText);
  // console.log (title);

  /*parrentTitle.append("<span class='product-category-custom-'"+title + "</span>");
  console.log (title);*/
  // Object alt name
  let object_click_name = getValueSelect(image_child, 'alt').toLowerCase().trim();
  let result = object_click_name.replace(/\s/g, '');


  showDiv();

  switch (title) {
    case 'Case':
      // Add product title
      // parrentTitle = $(".cpb-category.iZkEcmE2kJ1PHtK4tLTXBTdF .cpb-category-title .sc-eTuwsz")[0];  
      // if ($("#product-category-custom-"+cateText).length == 0) {
      //   console.log ('them');
      //   let content_add_title = '<span class="product-title-custom" id="product-category-custom-'+cateText + '"></span>';
      //     parrentTitle.insertAdjacentHTML('afterend',content_add_title);
      // } else {
      //   console.log ('ko them');
      // }


      $("#product-category-custom-case").text(object_click_name);
      //Update HTMl for case
      let case_content_name = object_click_name.replace(/\s/g, '').replace('/', '_');

      // $(".cpb-category-title .sc-eTuwsz").add("span").addId("product-category-custom"+);
      // $("")
      let case_content = getValueSelect(div_metafield, 'case_title_' + case_content_name);

      document.getElementById('case_text_show').innerHTML = case_content;

      break;
    case 'Dial':
      // Add product title


      // console.log (object_click_name);
      $("#product-category-custom-dial").text(object_click_name);
      // set dial content 
      let dial_content_name = object_click_name.replace(/\s/g, '').replace('/', '_');
      let dial_content = getValueSelect(div_metafield, dial_content_name);
      document.getElementById('dial_content').innerHTML = dial_content;
      break;
    case 'Strap':
      // Add product title
      // parrentTitle = $(".cpb-category.aymKq2kE0zk4YjLhWiu9G6IZ .cpb-category-title .sc-eTuwsz")[0];  
      // if ($("#product-category-custom-"+cateText).length == 0) {
      //   console.log ('them');
      //   let content_add_title = '<span class="product-title-custom" id="product-category-custom-'+cateText + '"></span>';
      //     parrentTitle.insertAdjacentHTML('afterend',content_add_title);
      // } else {
      //   console.log ('ko them');
      // }

      // Set infor 
      // let strap_title =  getValueSelect (div_metafield,'strap_title');
      // let strap_data  = getDataFormat (strap_title);  
      // let strap_text = getValueText (result,strap_data);
      // updateText ('strap_text_show',strap_text);

      let strap_content_name = object_click_name.replace(/\s/g, '').replace('/', '_');

      let strap_content = getValueSelect(div_metafield, 'strap_title_' + strap_content_name);

      document.getElementById('strap_text_show').innerHTML = strap_content;
      break;
    default:
      return;
  }


});

function getValueSelect(obj, key) {

  return obj.getAttribute(key);

}
// Show content from metafield
function showDiv() {
  var content_add =
    '<div id="content_add_option">' +
    ' <div class="custom_renzo_static_text">' +
    '<div id="static_text"></div>' +
    ' </div>' +
    ' <div  class="custom_renzo_case">' +
    ' <div id="case_text_show">Case selected</div>' +
    ' </div>' +
    '<div class="custom_renzo_dial" >' +
    '<div> <img id="dial_image" src=""> </div> ' +
    '</div>' +
    ' <div id="dial_content">' +
    '</div>' +
    '<div  class="custom_renzo_strap">' +
    '<div id="strap_text_show">Text base on slected strap</div>' +
    ' </div>' +
    '</div>';

  if (document.getElementById("content_add_option") == null) {
    let need_add = document.getElementsByClassName('cpb-product-actions')[0];
    need_add.insertAdjacentHTML('afterend', content_add);
  }

  let div_metafield = document.getElementById('metafield_content');
  let static_text = getValueSelect(div_metafield, 'static_text');
  document.getElementById('static_text').innerHTML = static_text;

}

function addTextCase(case_text) {
  document.getElementById("case_text_show").textContent = case_text;

}
function updateText(obj_id, content) {
  content = (content === null) ? '' : content;
  document.getElementById(obj_id).textContent = content;
}

function formatString(input, simple) {
  let res = input.split(simple);
  return res;

}

function getDataFormat(input) {

  let array = formatString(input, ",");
  let result = array.map(element => formatString(element, ':'));
  return result;
}

function getValueText(condition, data_array) {
  condition = condition.trim();
  var result = 'default';
  data_array.forEach(function (element) {
    let element_formated = element[0].replace(/\s/g, '');
    if (element_formated.trim().toLowerCase() === condition) {

      result = element[1];
    }

  });
  return result;
}

function setImageSrc(obj_id, url) {
  let image = document.getElementById('obj_id').setAttribute("src", url);

}
function getNumberTitle(input) {
  switch (input) {
    case "Case":
      return "1";
      break;
    case "Dial":
      return "2";
      break;
    case "Strap":
      return "3";
      break;
    default:
      return "";
  }

}
