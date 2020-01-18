    /*****Generic Routing *****/
    //relative URL should be like '/EN/Secure/Invest/Default.aspx' or '/Html/EN/RegMain.html'
function HttpRedirect(relativePathURL) {
    DomainName = document.domain;
    URL = "Http://" + DomainName + relativePathURL;
        document.location = URL;
    }
    
    function HttpsRedirect(relativePathURL) {
        DomainName = document.domain;
        URL = "";
        if (DomainName == "localhost")
            URL = "Http://" + DomainName + relativePathURL;
        else
            URL = "Https://" + DomainName + relativePathURL;

        document.location = URL;
    }

    function HttpRedirectPopup(relativePathURL) {
        day = new Date();
        id = day.getTime();
         DomainName = document.domain;
         URL = "Http://" + DomainName + relativePathURL;
        eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=700,height=536,left = 190,top = 90');"); 
    }
    

    /***** LogIn Functions ***/
    function LoginEN() {
        Login("EN");	    
	}
	function LoginAR() {
	    Login("AR");
	}
	function Login(lang) 
	{
	    DomainName = document.domain;
	    loginURL = "";
	    if (DomainName == "localhost")
	        loginURL = "Http://" + DomainName +  "/" + lang + "/HomeLogin.aspx";
	    else
	        loginURL = "Https://" + DomainName + "/" + lang + "/HomeLogin.aspx";

	    document.location = loginURL;
	}
	
	/***** Registration Functions ***/
	function RegisterEN() {
	    Register("EN");
	}
	function RegisterAR() {
	    Register("AR");
	}
	function Register(lang) {
	    DomainName = document.domain;
	    registerURL = "";
	    if (DomainName == "localhost")
	        registerURL = "Http://" + DomainName + "/Html/" + lang + "/RegistrationMain.htm";
	    else
	        registerURL = "Https://" + DomainName + "/Html/" + lang + "/RegistrationMain.htm";

	    window.open(registerURL, 'Register', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=920,height=627,left = 240,top = 90');
	}
	
	/***** Forget Password Functions ***/
	function ForgetPasswordEN() {
	    ForgetPassword("EN");
	}
	function ForgetPasswordAR() {
	    ForgetPassword("AR");
	}
	function ForgetPassword(lang) {
	    DomainName = document.domain;
	    forgetURL = "";
	    if (DomainName == "localhost")
	        forgetURL = "Http://" + DomainName + "/" + lang + "/ForgetPassword.aspx";
	    else
	        forgetURL = "Https://" + DomainName + "/" + lang + "/ForgetPassword.aspx";
	    window.open(forgetURL, 'ForgetPassword', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=675,height=300,left = 240,top = 90');
	}


	/***** Set Frame url ***/
	function SetFrameURL(lang, RelativeURL,fram) {
	    DomainName = document.domain;
	    URL = "";
	    if (DomainName == "localhost")
	        URL = "Http://" + DomainName + "/OpenWeb/" + lang + RelativeURL;
	    else
	        URL = "Https://" + DomainName + "/OpenWeb/" + lang + RelativeURL;

	    frm = document.getElementById('frCreatePlan');
	    frm.src = URL;
	}