---
layout: docs
title: DRAFT* - Migrating to AAD Sign-on for Garage Hive
---

<a name="top"></a>

# We are still working on this article!
We are currently reviewing this article before it is published, check back later.

# Migrating to AAD Sign-on for Garage Hive
When your Garage Hive system is migrated to AAD sign on, how you sign in will change. Previously, the sign-in screen looked something like the one below:

   ![](media/garagehive-aad-sign-on-migrate1.png)

After migrating to AAD Sign-on, the above sign-in screen will be replaced with the following:

   ![](media/garagehive-aad-sign-on-migrate2.png)

Your old username, for example, 'Daves,' will no longer work and will be replaced by something similar to an email address, such as 'dave.smith@yourgaragename.com'. Here's how to finish the migration to AAD sign-on for Garage Hive:

1. First, Microsoft will send you an email from **ms-noreply@microsoft.com** on behalf of your organisation that looks as follows. If you do not receive one, please contact the support team as we may be using your current email address as a username and you can skip this step.

   ![](media/garagehive-aad-sign-on-migrate3.png)

2. You will receive a **Username** and a **Temporary Password** in the email. To login, go to [office.com](https://www.office.com/?auth=2){:target="_blank"} and enter the username and temporary password you received. Change the temporary password to a password of your choice.

   ![](media/garagehive-aad-sign-on-migrate4.png)

3. To increase the security of your account, go to the **Security info** section on the left and click on **add a sign-in method**. Choose the **authenticator app** as the method you want to use, and click on **Add**. Download the Microsoft Authenticator App for your mobile phone or tablet [**here**].(https://www.microsoft.com/en-us/security/mobile-authenticator-app).

   ![](media/garagehive-aad-sign-on-migrate5.png)

4. In the **Microsoft Authenticator App**, add an account, select **Work or School** account, and then **Scan a QR Code**.
5. In your **Microsoft Account Page**, click **Next** until you reach the page where you can **Scan the QR Code**. Scan the code.

   ![](media/garagehive-aad-sign-on-migrate6.png)

6. You will be given an authenticator number to enter into your Microsoft Authenticator app; enter the number as prompted in the app.

   ![](media/garagehive-aad-sign-on-migrate7.png)

7. Once this is completed and we have changed the sign on method for your system, you will use this new username and password you created to access Garage Hive.
8. 









[Go back to top](#top)

### Parent Page Example
The following is an example of a parent page with **Google Tag Manager** default scripts and **Garage Hive Online Booking** embed script.

   ![](media/garagehive-online-booking-and-google-analytics-setup4.png)

[Go back to top](#top)

### Google Tag Manager Setup
Google Tag Manager needs to have 2 Tags set up – one is GA4 Configuration for the parent page general analytics and the second is GA4 Event to catch the custom iframe page load event and forward it to GA4.
1. Open **Google Tag Manager** and select **Tag** on the left side, followed by **New**.

   ![](media/garagehive-online-booking-and-google-analytics-setup5.png)

2. Enter the tag's name in the top left corner and click the **Tag Configuration** edit button.

   ![](media/garagehive-online-booking-and-google-analytics-setup6.png)

3. Select **Google Analytics: GA4 Configuration** as the **Tag Type** and enter the **Measurement ID** (starts with G-). You should create a new GA4 instance and obtain the measurement ID from there, [learn more](https://support.google.com/analytics/answer/9744165#use_existing_tags&zippy=%2Cin-this-article).
4. Then, for **Triggering**, click the edit button and choose **All Pages**. Click **Save**.

   ![](media/garagehive-online-booking-and-google-analytics-setup7.png)

5. Select **New** to create a new tag, and then setup the **Tag Configuration** as shown in the image below. This is to capture an iframe event and transform it to match a GA4 parameter so that it can be logged as a page view event.

   ![](media/garagehive-online-booking-and-google-analytics-setup8.png)

6. Click on the **Trigger Configuration** edit button and change the settings as shown in the image below.

   ![](media/garagehive-online-booking-and-google-analytics-setup9.png)

7. You should now have the two tags in place. Click the **Submit** button.

   ![](media/garagehive-online-booking-and-google-analytics-setup10.png)


[Go back to top](#top)