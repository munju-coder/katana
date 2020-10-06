$(document).ready( function(){
    /**
    * @brief 카드 input 자동커서이동
    */
    $(".c_input").keyup(function () {
        var inputCursor = $(this).attr("maxlength");
        if (this.value.length >= inputCursor) {
            $(this).next('.c_input').focus();
        }
    });

    /**
    * @brief 유효기간 input 자동커서이동
    */
    $(".period_input").keyup(function () {
        var inputCursor = $(this).attr("maxlength");
        if (this.value.length >= inputCursor) {
            $(this).next('.period_input').focus();
            return false;
        }
    });

    /**
    * @brief input number type maxlength
    */
    function maxLengthCheck(object) {
        if(object.value.length > object.maxLength) {
            object.value = object.value.slice(0, object.maxLength);
        }
    }

    /**
    * @brief pay_type check
    */
    $('#charge_cash_radio').click( function(){
        $('.card_info').hide();
        $('.cash_info').show();
        pay_type = "무통장";
    });

    $('#charge_card_radio').click( function(){
        $('.card_info').show();
        $('.cash_info').hide();
        pay_type = "카드";
    });

    /**
    * @brief member_form alert 
    */
    $(".member_form").submit(function(){
        
        var formObject = $(this).serializeObject();

        if(formObject['o_name'] == ""){
            alert("주문하시는분의 이름을 입력해주세요.");
            return false;
        }

        if(formObject['o_tel'] == ""){
            alert("주문하시는 분의 연락처를 입력해주세요.");
            return false;
        }

        if(formObject['o_email'] == ""){
            alert("이메일을 입력해주세요.");
            return false;
        }

        if(formObject['r_name'] == ""){
            alert("받으시는 분의 이름을 입력해주세요.");
            return false;
        }

        if(formObject['r_zip'] == ""){
            alert("우편번호를 입력해주세요.");
            return false;
        }

        if(formObject['r_addr_1'] == ""){
            alert("기본주소를 입력해주세요.");
            return false;
        }

        if(formObject['r_addr_2'] == ""){
            alert("상세주소를 입력해주세요.");
            return false;
        }

        // console.log(pay_type);
        var pay_type = "카드";
        //pay_type init
        formObject['pay_type'] = pay_type;

        if(pay_type == "무통장"){
            if(formObject['b_name'] == ""){
                alert("입금자명을 입력하세요.");
                return false;
            }
        }
        else if(pay_type == "카드"){
            if(formObject['card_num_1'] == "" || formObject['card_num_2'] == "" || formObject['card_num_3'] == "" || formObject['card_num_4'] == ""){
                alert("카드번호를 입력하세요.");
                return false;
            }

            if(formObject['card_num_mm'] == ""){
                alert("유효기간을 입력하세요.");
                return false;
            }
            if(formObject['card_num_yy'] == ""){
                alert("유효기간을 입력하세요.");
                return false;
            }
            
            if(formObject['install_period'] == ""){
                alert("할부기간을 선택하세요.");
                return false;
            }
        }

    });

    /**
    * @brief kakao api click event
    */
    $('#layer').click( function(){
        $('#modal_background').toggle();
    });
});