import React, { useState } from "react";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import AnnouncementDropdown from "./AnnouncementDropdown";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const announcements = [
    {
      title: "Minimum deposit and withdrawal instructions",
      time: "12:53:44 12/13/2024",
      details: (
        <div className="announcement-detail">
          <p>Minimum deposit and withdrawal instructions</p>
          <p></p>
          <p>✅ Minimum deposit amount:</p>
          <p></p>
          <p>5 USDT</p>
          <p>30 TRX</p>
          <p>100 EGP</p>
          <p>600 LKR</p>
          <p>600 PKR</p>
          <p>3000 NGN</p>
          <p></p>
          <p>💸 Deposit processing:</p>
          <p>
            All deposits will be automatically reflected in your account balance
            within 2-30 minutes.
          </p>
          <p>✅ Minimum withdrawal amount:</p>
          <p></p>
          <p>5 USDT</p>
          <p>30 TRX</p>
          <p>110 EGP</p>
          <p>600 LKR</p>
          <p>600 PKR</p>
          <p>3000 NGN</p>
          <p>✅ Withdrawal fee:</p>
          <p></p>
          <p>1 USDT</p>
          <p>5%</p>
          <p>2 TRX</p>
          <p></p>
          <p>💰 Withdrawal processing:</p>
          <p>
            All withdrawals will be processed and sent to your designated wallet
            within 10-120 minutes.
          </p>
          <p></p>
          <p>Thank you for your understanding and cooperation! 😊</p>
        </div>
      ),
    },
    {
      title:
        " Measures to prevent potential risks to your account and protect the safety of your assets. ",
      time: "20:26:00 07/05/2024",
      details: (
        <div className="announcement-detail">
          <p>Dear CoinRyze user,</p>
          <p></p>
          <p>
            During the time we completed the update and resumed normal
            operations, we collected a lot of feedback from users.
          </p>
          <p></p>
          <p>
            To ensure the security of your funds and the stability of the
            platform, we have made some important security upgrades. We
            particularly focused on user withdrawal address management.
          </p>
          <p></p>
          <p>
            From now on, when users make withdrawals and their total USDT or TRX
            value exceeds 1000 USD, and if they are using a withdrawal address
            that is not the previously used unique address, they will need to
            contact customer service for additional confirmation.
          </p>
          <p></p>
          <p>
            This measure aims to prevent potential risks and protect the
            security of your assets.
          </p>
          <p></p>
          <p>
            To facilitate a smooth withdrawal process, please make sure you have
            received the verification email and found the correct verification
            code before using the new withdrawal address. If you haven't
            received the code, please search for the keyword "certify" in your
            email search bar or check your spam folder.
          </p>
          <p></p>
          <p>
            If you have any questions or need assistance, please feel free to
            contact our customer support team.
          </p>
          <p></p>
          <p>Thank you again for your trust and support in CoinRyze.</p>
          <p></p>
          <p>CoinRyze Team</p>
        </div>
      ),
    },
    {
      title: "We will be conducting system maintenance",
      time: "22:05:11 07/02/2024",
      details: (
        <div className="announcement-detail">
          <p>**CoinRyze Official Team Announcement**</p>
          <p></p>
          <p>Dear CoinRyze Users,</p>
          <p></p>
          <p>
            To enhance server performance, strengthen our firewall, and optimize
            functionalities and data processing, we will be conducting system
            maintenance.
          </p>
          <p></p>
          <p>**Maintenance Schedule:**</p>
          <p>- Singapore Time: July 2, 2023, from 10:30 AM to 2:00 PM</p>
          <p>
            - Coordinated Universal Time (UTC+0): July 2, 2023, from 2:30 AM to
            6:00 AM
          </p>
          <p></p>
          <p>
            During this period, the website will be inaccessible, and all
            operations will be suspended. Once maintenance is complete, all
            services will be immediately restored. We appreciate your
            understanding and support, and we advise you to avoid any operations
            during this time.
          </p>
          <p></p>
          <p>
            If you have any questions, please contact our Telegram support:
            @CoinRyze_CSP008
          </p>
          <p></p>
          <p>Thank you for your trust in CoinRyze!</p>
          <p></p>
          <p>Sincerely,</p>
          <p>The CoinRyze Official Team</p>
        </div>
      ),
    },
    {
      title: "[CoinRyze: Essential Security Tips! 🔐]",
      time: "12:57:41 06/17/2024",
      details: (
        <div className="announcement-detail">
          <p>Hi CoinRyze family,</p>
          <p></p>
          <p>
            I just wanted to offer a few tips to keep your account and funds
            super secure:
          </p>
          <p></p>
          <p>
            1. **Protect your email** 📧: Your email is key to recovering your
            account and getting withdrawal codes. Use a strong password and
            enable two-factor authentication (2FA).
          </p>
          <p></p>
          <p>
            2. **Keep your account information private** 🤫: Never share your
            login details or private keys with anyone, and remember, CoinRyze
            employees will never ask for this information.
          </p>
          <p></p>
          <p>
            3. **2FA is a must** 🔑: An extra layer of security never hurts.
            Enabling 2FA keeps your account locked down, even if your password
            is compromised.
          </p>
          <p></p>
          <p>
            4. **Beware of phishing sites** 🎣: Always double-check the URL to
            make sure you are on our official website
            **[CoinRyze.org](http://coinryze.org/)**. Don't be fooled by fakes.
          </p>
          <p></p>
          <p>
            5. **Withdrawal Email Verification** 📩: To ensure it's really you,
            we'll ask you to send a verification code to your email when you
            withdraw.
          </p>
          <p></p>
          <p>Remember:</p>
          <p></p>
          <p>- Change your passwords often and keep them complex.</p>
          <p></p>
          <p>- Avoid logging in on public WiFi.</p>
          <p></p>
          <p>- Protect your devices with antivirus software.</p>
          <p></p>
          <p>If you have any questions or need help, we're here for you.</p>
          <p></p>
          <p>Stay safe,</p>
          <p></p>
          <p>The **CoinRyze Team** 🚀</p>
        </div>
      ),
    },
    {
      title: "CoinRyze Pakistan PKR Deposit and Withdrawal Maintenance Notice",
      time: "17:12:28 02/24/2024",
      details: (
        <div className="announcement-detail">
          <p>Dear CoinRyze users in Pakistan,</p>
          <p></p>
          <p>
            Due to the current banking policies and system upgrades in Pakistan,
            our platform is experiencing delays and instability in the PKR
            deposit and withdrawal channels. In order to ensure the safety of
            user funds and the smooth usage of our services, we have decided to
            temporarily suspend the PKR deposit and withdrawal channels.
          </p>
          <p></p>
          <p>
            During this period, we recommend our users in Pakistan to switch to
            using USDT for withdrawal transactions for a more seamless fund
            management experience. We sincerely apologize for any inconvenience
            this may cause and appreciate your understanding and support.
          </p>
          <p></p>
          <p>
            We will closely monitor the situation's developments and work
            diligently to resolve the related issues to provide a more stable
            and efficient service. If you have any questions or need assistance,
            please feel free to contact our customer service team.
          </p>
          <p></p>
          <p>Thank you for your trust and support in CoinRyze.</p>
          <p></p>
          <p>Wishing you a pleasant trading experience!</p>
          <p></p>
          <p>The CoinRyze Team</p>
        </div>
      ),
    },
    {
      title: " Subject: Important Notice: Protect Your Account Security ",
      time: "17:12:28 02/24/2024",
      details: (
        <div className="announcement-detail">
          <p style="text-align:start;text-indent:2em;"></p>
          <p>Dear valued user,</p>
          <p style="text-align:start;text-indent:2em;"></p>
          <p>
            We sincerely appreciate your ongoing trust and support for the
            COINRYZE platform. In order to ensure the security of your account,
            we would like to provide you with some advice and warnings. We hope
            you remain vigilant at all times to collectively maintain a secure
            platform environment.
          </p>
          <p></p>
          <p>
            <strong>1. Do Not Share Your Account Information:</strong>{" "}
          </p>
          <p>
            Please refrain from sharing any sensitive information, including
            your username, password, verification codes, with anyone, even if
            they claim to be platform customer service or other related
            personnel. Our customer service team will never ask you for your
            password or other sensitive information.
          </p>
          <p></p>
          <p>
            <strong>
              2. Exercise Caution with Spam Emails and Phishing Links:
            </strong>{" "}
          </p>
          <p>
            Handle emails with caution, especially those from unknown senders.
            Avoid clicking on any links contained in such emails to prevent
            falling victim to phishing websites. Ensure that all your operations
            are conducted only on the official platform or website, and avoid
            providing personal information via email or other channels.
          </p>
          <p></p>
          <p>
            <strong>3. Beware of Trojan Files and Malicious Software:</strong>{" "}
          </p>
          <p>
            Do not download, open, or execute files from strangers, particularly
            executable files, attachments, or links. These may contain malicious
            software that could lead to the compromise of your account
            information or other security issues.
          </p>
          <p></p>
          <p>
            <strong>4. Regularly Change Your Password:</strong>
          </p>
          <p>
            To enhance the security of your account, we recommend changing your
            password regularly. Ensure that your password is complex,
            incorporating a combination of letters, numbers, and special
            characters. Avoid using easily guessable passwords such as birthdays
            or names.
          </p>
          <p></p>
          <p>
            We will continue to strive to provide you with a secure and
            trustworthy platform environment. Please actively take the above
            measures to safeguard your account security. If you have any
            concerns or detect any unusual activity, please contact our customer
            service team immediately. We will promptly provide support and
            assistance.
          </p>
          <p></p>
          <p>Once again, thank you for your trust and support.</p>
          <p></p>
          <p>Wishing you a pleasant experience!</p>
          <p></p>
          <p>The COINRYZE Team</p>
        </div>
      ),
    },
    {
      title: "CoinRyze Pakistan PKR Deposit and Withdrawal Maintenance Notice",
      time: "17:12:28 02/24/2024",
      details: (
        <div className="announcement-detail">
          <p>Dear CoinRyze users in Pakistan,</p>
          <p></p>
          <p>
            Due to the current banking policies and system upgrades in Pakistan,
            our platform is experiencing delays and instability in the PKR
            deposit and withdrawal channels. In order to ensure the safety of
            user funds and the smooth usage of our services, we have decided to
            temporarily suspend the PKR deposit and withdrawal channels.
          </p>
          <p></p>
          <p>
            During this period, we recommend our users in Pakistan to switch to
            using USDT for withdrawal transactions for a more seamless fund
            management experience. We sincerely apologize for any inconvenience
            this may cause and appreciate your understanding and support.
          </p>
          <p></p>
          <p>
            We will closely monitor the situation's developments and work
            diligently to resolve the related issues to provide a more stable
            and efficient service. If you have any questions or need assistance,
            please feel free to contact our customer service team.
          </p>
          <p></p>
          <p>Thank you for your trust and support in CoinRyze.</p>
          <p></p>
          <p>Wishing you a pleasant trading experience!</p>
          <p></p>
          <p>The CoinRyze Team</p>
        </div>
      ),
    },
  ];

  const tabs = [
    {
      title: "News",
      content: (
        <>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2 mt-3">
              <div className="news-content  col-6">
                <h5>Leading trading system!</h5>
                <h6>Time 18:31:04 12/02/2024 </h6>
              </div>
              <img src={banner1} alt="image" className="img-fluid" />
            </div>
          </a>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2  mt-3">
              <div className="news-content col-6">
                <h5>
                  We promise to provide the safest and most reliable service
                </h5>
                <h6>Time 18:15:06 12/02/2024</h6>
              </div>

              <img src={banner2} alt="image" className="img-fluid" />
            </div>
          </a>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2 mt-3 ">
              <div className="news-content col-6">
                <h5>Register now and win iPhone15pro immediately!</h5>
                <h6>Time 13:36:42 04/24/2024</h6>
              </div>
              <img src={banner1} alt="image" className="img-fluid" />
            </div>
          </a>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2  mt-3">
              <div className="news-content  col-6">
                <h5>📢 New to CoinRyze? Check here!</h5>
                <h6>Time 17:56:40 04/17/2024</h6>
              </div>
              <img src={banner1} alt="image" className="img-fluid" />
            </div>
          </a>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2 mt-3">
              <div className="news-content col-6">
                <h5>Get an extra 5% to 30% bonus on every trade! 🎉</h5>
                <h6>Time 21:33:31 04/12/2024</h6>
              </div>
              <img src={banner1} alt="image" className="img-fluid" />
            </div>
          </a>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2 mt-3">
              <div className="news-content col-6">
                <h5>ETH Color Prediction: Exclusive Deposit Promotion</h5>
                <h6>Time 17:57:59 03/10/2024</h6>
              </div>
              <img src={banner1} alt="image" className="img-fluid" />
            </div>
          </a>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2 mt-3">
              <div className="news-content col-6">
                <h5>Coinryze Whatsapp channel ! Join Now !</h5>
                <h6>Time 20:47:45 01/26/2024</h6>
              </div>
              <img src={banner1} alt="image" className="img-fluid" />
            </div>
          </a>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2 mt-3">
              <div className="news-content col-6">
                <h5>CR Instructor’s Guidebook</h5>
                <h6>Time 17:30:00 12/03/2023</h6>
              </div>
              <img src={banner1} alt="image" className="img-fluid" />
            </div>
          </a>
          <a>
            <div className="news-section d-flex justify-content-between align-item-center text-align-center p-2 mt-3">
              <div className="news-content col-6">
                <h5>
                  CoinRyze Official Telegram Channel Now Live! Join Now for the
                  Latest Updates!
                </h5>
                <h6>Time 14:05:50 09/12/2023</h6>
              </div>
              <img src={banner1} alt="image" className="img-fluid" />
            </div>
          </a>
        </>
      ),
    },
    {
      title: "Announcement",
      content: "",
    },
  ];

  return (
    <div className="container-fluid p-0">
      <div className="tabs">
        {/* Step 3: Render tab buttons */}
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`} // Add 'active' class to the active tab
            onClick={() => setActiveTab(index)} // Update the active tab index
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {/* Step 4: Render the content of the active tab */}
        {tabs[activeTab].content}
      </div>
      <div className="container p-0">
        <AnnouncementDropdown announcements={announcements} />
      </div>
    </div>
  );
};

export default TabSection;
