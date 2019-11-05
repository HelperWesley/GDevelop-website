import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageContainer from '../../lib/PageContainer';
import BigTitle from '../../components/BigTitle';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import MarkdownText from '../../components/MarkdownText';

const TermsAndConditionsPage = props => (
  <PageContainer {...props.pathContext}>
    {t => (
      <React.Fragment>
        <Helmet title="GDevelop - Terms And Conditions">
          <html lang="en" />
        </Helmet>
        <Navbar t={t} noTransparency />
        <NavBarSpacer />
        <TransparentContainer>
          <BigTitle>Terms &amp; Conditions</BigTitle>
          <MarkdownText
            useParagraphs
            source={`
## Overview

This website (https://gdevelop-app.com), related websites (https://forum.gdevelop-app.com, https://wiki.gdevelop-app.com, https://editor.gdevelop-app.com) and related applications (GDevelop), referred to as the Service, are operated by FLORIAN RIVAL. Throughout the site, the terms “we”, “us” and “our” refer to FLORIAN RIVAL. FLORIAN RIVAL offers these websites and applications, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.


## 1. Terms

By accessing this website (https://gdevelop-app.com), related websites (https://forum.gdevelop-app.com, https://wiki.gdevelop-app.com, https://editor.gdevelop-app.com) and related applications (GDevelop), you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing these sites and related applications. The materials contained in these websites and related applications are protected by applicable copyright and trademark law.

The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.


## 2. Use License

You’re not allowed to copy, or modify the Service, any part of the Service, or our trademarks in any way - except for parts of the Service that are open-source and licensed under the MIT license. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions - except for parts of the Service that are open-source and licensed under the MIT license. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to FLORIAN RIVAL.

FLORIAN RIVAL is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.


## 3. Disclaimer

The materials on the Service are provided on an 'as is' basis. FLORIAN RIVAL makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
Further, FLORIAN RIVAL does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites or applications linked to this Service.

The applications and websites of this Service store and process personal data that you have provided to us, in order to provide the Service. It’s your responsibility to keep your device and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, tablet or computer, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the GDevelop applications and the websites of the Service won’t work properly or at all.


## 4. Limitations

In no event shall FLORIAN RIVAL or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the applications and the websites of the Service, even if FLORIAN RIVAL or a FLORIAN RIVAL authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.

Certain functions of the Service will require the Service to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but FLORIAN RIVAL cannot take responsibility for the Service not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.

If you’re using the Service outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the Service, or other third party charges. In using the Service, you’re accepting responsibility for any such charges, including roaming data charges if you use the Service outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the Service, please be aware that we assume that you have received permission from the bill payer for using the Service.

Along the same lines, FLORIAN RIVAL cannot always take responsibility for the way you use the Service i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, FLORIAN RIVAL cannot accept responsibility.

With respect to FLORIAN RIVAL’s responsibility for your use of the Service, when you’re using the Service, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. FLORIAN RIVAL accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.


## 5. Accuracy of materials

The materials appearing on the Service could include technical, typographical, or photographic errors. FLORIAN RIVAL does not warrant that any of the materials on its website are accurate, complete or current. FLORIAN RIVAL may make changes to the materials contained on its website at any time without notice. However FLORIAN RIVAL does not make any commitment to update the materials.


## 5. User Comments Feedback And Other Submissions

If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.

We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.

You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.


## 6. Personal Information

Your submission of personal information through the store is governed by our Privacy Policy.


## 7. Updates to the Service

At some point, we may wish to update the Service. The applications and websites of the Service is currently available on Android, iOS, Windows, macOS, Linux – the requirements for these systems (and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the Service. FLORIAN RIVAL does not promise that it will always update the Service so that it is relevant to you and/or works with the operating system version that you have installed on your device. We may also wish to stop providing the Service, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the Service, and (if needed) delete it from your device.


## 8. Prohibited uses

In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:

* (a) for any unlawful purpose;
* (b) to solicit others to perform or participate in any unlawful acts;
* (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;
* (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others;
* (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;
* (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others;
* (i) to spam, phish, pharm, pretext, spider, crawl, or scrape;
* (j) for any obscene or immoral purpose;
* or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet.

We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.

## 9. Optional Tools

We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.

You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.

Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).

We may also, in the future, offer new services and/or features through the applications and websites (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.


## 10. Third Party Links and Content

Certain content, products and services available via our Service may include materials from third-parties.

Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.

We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.


## 11. Indemnification

You agree to indemnify, defend and hold harmless FLORIAN RIVAL and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.


## 12. Severability

In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.


## 13. Termination

The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.

These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).


## 14. Entire Agreement

The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.

These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.


## 15. Changes to This Terms and Conditions

We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page. These changes are effective immediately after they are posted on this page. By using this Service you are agreeing to be bound by the then current version of these terms of service.


## Contact Us

If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact us at [gdevelop-app-support@googlegroups.com](gdevelop-app-support@googlegroups.com).
            `}
          />
        </TransparentContainer>
        <Footer t={t} />
      </React.Fragment>
    )}
  </PageContainer>
);

export default TermsAndConditionsPage;
