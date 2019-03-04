<template>
  <div class="privacy-section">
    <Header/>
    <div
      class="content-header"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/privacy-bg.jpg') + ')' }"
    >
      <div class="container ver-align">
        <div class="row">
          <div
            style="max-width: 350px;"
            class="col-12 col-lg-6 col-md-12 col-sm-12 bg-white text-lg-left text-md-center text-sm-center text-center m-3"
          >
            <h1 class="industry-title">Privacy Policy</h1>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container policy-section text-left">
      <div class="row p-4">
        <p class="mt-3">
          Price Platform Ltd respects your privacy and is committed to protecting your personal
          information that you provide to us. This statement explains our policies and practices regarding
          the use and disclosure of your personal information by Price Platform Ltd. Please note that,
          Price Platform Ltd reviews and updates this Privacy Policy from time to time as needed without
          notice. Therefore, you should review the terms of this policy periodically to make sure that you are
          aware of how Price Platform Ltd collects and uses personal information. By using our web site,
          you consent to the collection and use of your personal information by Price Platform Ltd as explained below.
        </p>

        <h4>Personal Information.</h4>
        <p>
          You have complete control over your personal information. In general, you can visit our web site
          without providing us with any personal information. However, there are instances where we must
          have your personal information in order for us to grant you an access to our protected and secured
          sites. This information may include registration data (your name, address, email address, phone
          number, title, etc.), information request data and response data ("User Information"). When you
          receive your confirmation email or when you receive any email from the list server, you will be
          given instructions on how to remove yourself from the list.
        </p>

        <h4>Use of User Information.</h4>
        <p>
          We intend to use such information for purposes of supporting your and your employers relationship
          with Price Platform Ltd by designing a web site content that is suitable to your needs and
          alerting you to new product and service offerings as they become available. This User Information
          may be retained by Price Platform Ltd to verify compliance with the agreement between FuturePro
          Logistics Ltd and your employer, to keep track of the domains from which people visit us, to create
          a user profile to better serve you and your employer, or to simply contact you either electronically
          or otherwise. If you decide that we should not use your personal User Information to contact you,
          please let us know and we will not use that information for such purpose. However, please do not
          submit any User Information if you are less than 18 years of age.
        </p>

        <h4>Disclosure of User Information.</h4>
        <p>
          Price Platform Ltd does not sell, trade or transfer User Information to third parties.
          However, we may share User Information with our business partners for marketing, advertising or
          product/service offering purposes. For example, we provide User Information to our service
          providers for direct emailing of our newsletters, online surveys or notifications on FuturePro
          Logistics Ltd Offerings to our viewers. We also disclose User Information if: we have your consent;
          we need to share it in order to provide you with the products and/or services you requested; we
          respond to a court order or you violate our Terms of Use. You may separately agree to provide your
          personal information to third parties that provide content for Price Platform Ltd Offerings,
          in order to access and/or use their products and/or services. If you agree to provide such information
          to these third parties, then your personal information will be subject to their privacy policies.
        </p>

        <h4>Accuracy and Security.</h4>
        <p>
          The accuracy and security of the User Information is important to Price Platform Ltd.
          Currently, you may review and request updates to your User Information retained by contacting
          Price Platform Ltd. If you contact us to correct your User Information, we will attempt to
          correct such inaccuracies in a timely manner. Price Platform Ltd is concerned with the security
          of your User Information and is committed to taking reasonable steps to protect it from unauthorized
          access and use of that personal information. To that end, we put in place the appropriate physical,
          electronic and managerial policies and procedures to secure your personal User Information. We also
          continue to implement procedures to maintain accurate, complete and current User Information.
        </p>

        <h4>Usernames and Passwords.</h4>
        <p>
          Access to certain content on our web site may be allowed under a written agreement between you or
          your employer and Price Platform Ltd and will require a username and/or password. In some cases,
          failure to provide personal information may prevent you from accessing certain Price Platform Ltd
          web site(s) containing certain confidential information, products, services, or promotional offers
          ("Price Platform Ltd Offerings"). By accessing and using our protected and secured web site(s),
          you agree to maintain the confidentiality of the username and password you selected to access such
          site(s) and consent to our Terms of Use.
        </p>

        <h4>Cookies.</h4>
        <p>
          Price Platform Ltd uses "cookies". A cookie is a small data file that a web site can transfer
          to a visitor's hard drive to keep records of the visits to such site. A cookie contains information
          such as your username and password that helps us recognise the pages you have visited and improve
          future visits, but the only personal information a cookie can contain is the information that you
          provide yourself. A cookie cannot read data off of your hard drive or read cookie files created by
          other sites. Information stored in cookies may be encrypted, however, we do not store your credit
          card number in cookies. If you prefer not to accept a cookie, you can set your web browser (Microsoft
          Internet Explorer or Google Chromenet) to warn you before accepting cookies or you can refuse all cookies
          by turning them off in your web browser. However, access to some of our secured web site(s) may require the
          use of cookies, which you must enable only cookies that get sent back to the originating server. Otherwise,
          you can still access most of the features on our web site even without accepting a cookie.
          <br>
          <br>We wish to assure you that these non-intrusive cookies are not harmful in any way.
        </p>

        <h4>External Links.</h4>
        <p>
          Price Platform Ltd web site provides links to other third party web sites. Even if the third
          party is affiliated with Price Platform Ltd through a business partnership or otherwise,
          Price Platform Ltd is not responsible for the privacy policies or practices or the content
          of such external links. These links are provided to you for convenience purposes only and you access
          them at your own risk.
        </p>

        <h4>End User Agreement</h4>
        <p>
          Please also see our End User Agreement, which describes the restrictions, disclaimers,
          indemnification and limitation of liability governing the use of the entire Price Platform
          Ltd web site.
        </p>

        <h4>General.</h4>
        <p>
          If you have questions regarding our Privacy Statement, please contact Price Platform Ltd
          via our Contact page.
        </p>
      </div>
    </div>
    <!--  -->
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/LandingHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "PrivacyPolicy",
  components: {
    Header,
    Footer
  }
};
</script>