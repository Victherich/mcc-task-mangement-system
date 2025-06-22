
// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {

//   useEffect(() => {
//     // Load Google Translate script dynamically when component mounts
//     const script = document.createElement("script");
//     script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     script.onload = () => {
//       // Initialize the Google Translate Element once the script is loaded
//       window.googleTranslateElementInit = () => {
//         new window.google.translate.TranslateElement({
//           pageLanguage: 'en', // Default language
//           includedLanguages: '', // Leave empty to support all languages
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//           autoDisplay: false, // Prevent auto-display
//         }, 'google_translate_element');
//       };
//     };
//     document.body.appendChild(script);

//     // Cleanup script on component unmount
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
  
//       <div id="google_translate_element"></div>
//     </div>
//   );
// };

// export default GoogleTranslate;




// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {
//     useEffect(() => {
//         // Prevent script from being added multiple times
//         if (document.getElementById('google-translate-script')) {
//           if (window.google && window.google.translate) {
//             new window.google.translate.TranslateElement(
//               {
//                 pageLanguage: 'en',
//                 includedLanguages: '',
//                 layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//                 autoDisplay: false,
//               },
//               'google_translate_element'
//             );
//           }
//           return;
//         }
      
//         window.googleTranslateElementInit = () => {
//           new window.google.translate.TranslateElement(
//             {
//               pageLanguage: 'en',
//               includedLanguages: '',
//               layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//               autoDisplay: false,
//             },
//             'google_translate_element'
//           );
//         };
      
//         const script = document.createElement('script');
//         script.id = 'google-translate-script';
//         script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//         script.async = true;
//         document.body.appendChild(script);
//       }, []);
      

//   return <div id="google_translate_element"></div>;
// };

// export default GoogleTranslate;




import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (document.getElementById('google-translate-script')) {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages:
              'en,es,fr,de,zh-CN,zh-TW,ru,ar,pt,hi,ja,ko,it,tr,fa,bn,id,ms,vi,sw,uk,nl,pl,ro,th,cs,el,he,hu,sv,ta,ur',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
      return;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages:
          'en,es,fr,de,zh-CN,zh-TW,ru,ar,pt,hi,ja,ko,it,tr,fa,bn,id,ms,vi,sw,uk,nl,pl,ro,th,cs,el,he,hu,sv,ta,ur,hr,bg',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
