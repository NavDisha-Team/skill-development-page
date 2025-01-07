const translations = {
    en: {
        title: "Financial Education Hub",
        subtitle: "Learn smart financial habits, budgeting tips, and investment hacks in your language.",
        videoHeader: "Video Tutorials",
        video1Title: "Budgeting Basics by Dhruv Sir (Hindi)",
        video1Caption: "Learn the basics of budgeting and financial planning.",
        video2Title: "Saving Hacks for Beginners (Tamil)",
        video2Caption: "Discover easy hacks to start saving effectively.",
        video3Title: "Introduction to Mutual Funds (Kannada)",
        video3Caption: "A beginner's guide to understanding mutual funds.",
        resourceHeader: "Additional Resources",
        resource1: "PDF: Step-by-Step Budgeting Guide",
        resource2: "E-Book: Basics of Investing",
        resource3: "Interactive Tool: Monthly Savings Calculator",
        resource4: "Join Our Financial Literacy Forum",
        footerText: "Need guidance? Contact Us",
    },
    hi: {
        title: "वित्तीय शिक्षा केंद्र",
        subtitle: "अपनी भाषा में स्मार्ट वित्तीय आदतें, बजट टिप्स और निवेश की जानकारी सीखें।",
        videoHeader: "वीडियो ट्यूटोरियल",
        video1Title: "ध्रुव सर द्वारा बजट की मूल बातें (हिन्दी)",
        video1Caption: "बजट और वित्तीय योजना की मूल बातें जानें।",
        video2Title: "शुरुआती लोगों के लिए बचत के उपाय (तमिल)",
        video2Caption: "प्रभावी रूप से बचत शुरू करने के आसान उपाय जानें।",
        video3Title: "म्यूचुअल फंड का परिचय (कन्नड़)",
        video3Caption: "म्यूचुअल फंड को समझने के लिए एक शुरुआती गाइड।",
        resourceHeader: "अतिरिक्त संसाधन",
        resource1: "पीडीएफ: चरण-दर-चरण बजट गाइड",
        resource2: "ई-पुस्तक: निवेश की मूल बातें",
        resource3: "इंटरएक्टिव टूल: मासिक बचत कैलकुलेटर",
        resource4: "हमारे वित्तीय साक्षरता मंच से जुड़ें",
        footerText: "मार्गदर्शन चाहिए? हमसे संपर्क करें",
    },
};

document.getElementById("language-dropdown").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    const translation = translations[selectedLanguage];

    // Update the text content for each element
    document.getElementById("title").textContent = translation.title;
    document.getElementById("subtitle").textContent = translation.subtitle;
    document.getElementById("video-header").textContent = translation.videoHeader;
    document.getElementById("video1-title").textContent = translation.video1Title;
    document.getElementById("video1-caption").textContent = translation.video1Caption;
    document.getElementById("video2-title").textContent = translation.video2Title;
    document.getElementById("video2-caption").textContent = translation.video2Caption;
    document.getElementById("video3-title").textContent = translation.video3Title;
    document.getElementById("video3-caption").textContent = translation.video3Caption;
    document.getElementById("resource-header").textContent = translation.resourceHeader;
    document.getElementById("resource1").textContent = translation.resource1;
    document.getElementById("resource2").textContent = translation.resource2;
    document.getElementById("resource3").textContent = translation.resource3;
    document.getElementById("resource4").textContent = translation.resource4;
    document.getElementById("footer-text").textContent = translation.footerText;
});
