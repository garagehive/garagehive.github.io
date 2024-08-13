---
layout: docs
title: Setting Up and Using Emailing Feature in Garage Hive 
---

<a name="top"></a>

## In this article
1. [Email setup](#email-setup)
   - [Microsoft office 365 email account setup](#microsoft-office-365-email-account-setup)
   - [Gmail email account setup](#gmail-email-account-setup)
2. [Using the emailing feature](#using-the-emailing-feature)
3. [Adding Email Text Templates](#adding-email-text-templates)
4. [Attaching a Document to the Email](#attaching-a-document-to-the-email)
5. [Accessing email outbox](#accessing-email-outbox)
6. [Accessing sent emails](#accessing-sent-emails)
7. [View email logs for posted documents](#view-email-logs-for-posted-documents)

### Email setup
If your system does not have an email setup, you must do the setup before using the emailing feature:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Email Accounts**, and select the related link.
2. Select **New** and then **Add an email account**.
3. Read the information in the pop-up window and then press **Next**.

   ![](media/garagehive-email-feature11.gif)

4. The email setup uses the **SMTP** account type. We'll go over how to set up a **Microsoft Office 365** email account and a **Gmail** email account. To get to the setup you require, click on any of the links below.
   - [Microsoft office 365 email account setup](#microsoft-office-365-email-account-setup)
   - [Gmail email account setup](#gmail-email-account-setup)

[Go back to top](#top)

#### Microsoft office 365 email account setup
There are two options for setting up the **Microsoft Office 365 email account**, one is when you have a **Multi-factor Authentication** method enabled, this is when the user is required to provide two or more verification factors to gain access to your Microsoft account, and two is when you don't have the **Multi-factor Authentication** enabled. First, let's look at scenario one.
1. When you have the **Multi-factor Authentication** enabled, you will require an **App Password** which you get from your microsoft account, [read more](https://support.microsoft.com/en-us/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9){:target="_blank"}. An App Password is a 16-digit passcode that gives the Garage Hive app permission to access your Microsoft Account.
1. To get the **App Password**, sign in to your Microsoft account, go to the [My Account page](https://myaccount.microsoft.com/{:target="_blank"}) and select **Security info**.

   ![](media/garagehive-email-setup1.png)

1. Select **Add sign-in method**, choose **App password** from the list, and then select **Add**.

   ![](media/garagehive-email-setup2.png)

1. Enter a name for the app password, and then select **Next**; this name helps differentiate the app password from others.

   ![](media/garagehive-email-setup3.png)

1. Copy the password from the **App password** page, and then select **Done**.

   ![](media/garagehive-email-setup4.png)

1. Open the **Set Up Email** page in Garage Hive, choose **SMTP**, and select **Next**.

   ![](media/garagehive-email-setup5.png)

1. In the **Setup SMTP Account** page, select **Apply Office 365 Server Settings**.
1.  Enter the **Account Name** (this can be the user's name), the **Sender Name** (the name that appears in the email header when an email is sent), your **Email Address** (the Microsoft office 365 email address to setup), the **User Name** (this is the Microsoft office 365 email address), and then paste the **App Password**, that you created in your Microsoft account, in the **Password** Field.

     ![](media/garagehive-email-setup6.png)

1. When you're finished, click **Next**.
1. To confirm the settings, click **Send Test Email**, then **Other** and enter the email address to which you want to send the test email. If an email is sent, the email settings are correct; otherwise, please contact the Garage Hive Support team for assistance with the setup.
1. Select **Finish** to add the email.

     ![](media/garagehive-email-setup7.png)

1. If you don't have **Multi-factor Authentication** enabled, repeat steps 7 and 8 and enter your email account password instead of the **App Password** in the **Password** field.

     ![](media/garagehive-email-setup8.png)

[Go back to top](#top)

#### Gmail email account setup
To set up a **Gmail email account:**
1. First you have to generate an **App Password**, from your [Google Account](https://myaccount.google.com/){:target="_blank"}. An App Password is a 16-digit passcode that gives a Garage Hive app permission to access your Google Account. App Passwords can only be used with accounts that have 2-Step Verification turned on, [read more](https://support.google.com/accounts/answer/185833?hl=en){:target="_blank"}.
1. From your google account, select **Security**, and under **Signing in to Google**, select **App Passwords.**
1. At the bottom, choose **Select app** and select **Other (Custom name)**. Enter the name of the **App Password**, and click **Generate**.
1. Copy the **App Password** generated in the yellow bar.
1. Open the **Set Up Email** page in Garage Hive, choose **SMTP**, and select **Next**.

   ![](media/garagehive-email-setup5.png)

1. In the **Setup SMTP Account** page, enter the **Account Name** (this can be the user's name), the **Sender Name** (the name that appears in the email header when an email is sent), your **Email Address** (the Gmail email address to setup), select **Authentication** as **Basic**, the **User Name** (this is the Gmail email address), and then paste the **App Password**, that you created in your Google account, in the **Password** Field. 
1. For the **Server Url** and **Port** (Port for SSL), copy from **Outgoing Mail (SMTP) Server** section in [this page from google](https://support.google.com/mail/answer/7126229?hl=en#zippy=%2Cstep-change-smtp-other-settings-in-your-email-client){:target="_blank"}.
1. When you're finished, click **Next**.

   ![](media/garagehive-email-setup9.png)

1. To confirm the settings, click **Send Test Email**, then **Other** and enter the email address to which you want to send the test email. If an email is sent, the email settings are correct; otherwise, please contact the Garage Hive Support team for assistance with the setup.
1. Select **Finish** to add the email.

   ![](media/garagehive-email-setup7.png)

[Go back to top](#top)

### Using the emailing feature
The emailing feature is available in Jobsheets, Estimates, Vehicle Inspection Estimates, and Checklists. Here's how to get the most out of the feature:
1. To use the Email feature, go to the document's menu bar; 
      * Select **Print/Send** followed by **Email** for Estimates, Vehicle Inspection Estimates, and Checklists.

   ![](media/garagehive-email-feature1.png)

      * Select **Print/Send** followed by **Email Invoice** or **Email Proforma Invoice** for the Jobsheets.

   ![](media/garagehive-email-feature2.png)
  
2. When you select the email option, the document is automatically attached to the email. You can find it at the bottom of the page under the **Attachments** FastTab.

   ![](media/garagehive-email-feature3.png)

3. The email signature (which includes the company name, phone number, and email address) and the logo on the email message body are obtained from the system's **Company Information** page.

   ![](media/garagehive-email-feature21.png)  
   
4. You can update the information by searching **Company Information** into the top right corner ![](media/search_icon.png) icon and select the related link. Fields to update are: **Name**, **Phone Number**, **Email**, or **Picture**.

   ![](media/garagehive-email-feature4.png)

5. Under **Email Details** FastTab, enter the email address to send to in the **To** field and the subject of the email in the **Subject** field.
6. You can now add the email **Message** body for the customer. You can format the message however you want by changing the different formats available at the bottom of the **Message** field, such as the font, font size, text colour, and so on.

   ![](media/garagehive-email-feature7.png)

6.  When you're finished editing the email, select **Send Email** from the menu bar to send it.

   ![](media/garagehive-email-feature10.png)

7.  If you want to save the email as a draft and return to it later, click the back button and choose **Keep as draft in Email Outbox**; otherwise, choose **Discard email**.

   ![](media/garagehive-email-feature10a.gif)


[Go back to top](#top)

### Adding Email Text Templates
To make it easier to manage the email **Message** body, you can create **Text Templates** that will allow you to reuse similar text across multiple emails that you send. 
1. Click on **Select Text Template** under the **Email Details** FastTab.
   
   ![](media/garagehive-email-feature18.png)

1. Select **New** from the menu bar.
   
   ![](media/garagehive-email-feature19.png)

2. Enter the **Code** for the template (you can name it depending on what you put in the message body), select **Type** as **Email Body**, and then enter the **Message** body in the writing space under the **General** FastTab.

   ![](media/garagehive-email-feature8.png)

3. To add a template, click the **Select Text Template** link under the **Email Details** FastTab, then choose the template, and then click the **OK** button.

   ![](media/garagehive-email-feature20.png)

4. To insert the template into the **Message** body, select the desired position and press the **Ctrl+V** keys to paste the template.

   ![](media/garagehive-email-feature11.png)


[Go back to top](#top)

### Attaching a Document to the Email
1. You could attach a file to the email by scrolling down to the **Attachments** FastTab and selecting either of the following options:
   * **Add related documents** - You can attach related documents to the current document such as estimates, VI estimates, or Checklists.
   * **Add files from default selection** - You can attach files stored in **Email Scenario Attachments**.
   * **Add file** - You can attach various file types such as PDFs, Word documents, images, etc directly from your computer. 
   * **Add file from source document** - You can add documents linked to the source document, if the document you are working on was created from another document.

      ![](media/garagehive-email-feature9.png)


[Go back to top](#top)

### Accessing email outbox
To access the draft emails in the outbox:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Email Outbox**, and select the related link.

   ![](media/garagehive-email-feature12.png)

2. Choose the draft email that you want to continue editing. You can view the document from which the email was created by selecting **Show Source**.

   ![](media/garagehive-email-feature22.png)

[Go back to top](#top)

### Accessing sent emails
To access the sent emails in the system:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Sent Emails**, and select the related link.
2. You can view the sent email by selecting it from the list that appears.
3. Select **Resend** if you want to resend the email, or **Edit and Send** if you made an error and want to correct it.

   ![](media/garagehive-email-feature13.gif)

[Go back to top](#top)

### View email logs for posted documents
You can keep track of how many copies of a posted document were sent via email. This is how you do it:
1. Open the posted document you want to check from the **Posted & Archived Documents** menu in the Role Centre, such as **Posted Jobsheet** and **Posted Sales Invoice**.

   ![](media/garagehive-email-feature14.png)

2. Scroll down to the **Details** FastTab in the **Posted Jobsheet** document you've chosen (click **Show More** to see all the fields). 
3. The **No. of Emailed Documents** field indicates how many copies of that document have been emailed.

   ![](media/garagehive-email-feature15.png)

4. For the **Posted Sales Invoice** document, go to the **General** FastTab.

   ![](media/garagehive-email-feature16.png)

5. When you click on the number in the **No. of Emailed Documents** field, the **Communication Log Entries** for that document open, and you can view the customer to whom the document was sent, who sent it, and so on.

   ![](media/garagehive-email-feature17.png)


[Go back to top](#top)
