---
layout: docs
title: Setting Up Online Booking
---

<a name="top"></a>

# Setting Up Online Booking
Online booking in Garage Hive allows customers to book, for example, MOT, servicing, or repairs from the business' websites or social media platforms available, and the booking is recorded directly in the Garage Hive system.

## In this article
1. [Online Booking Setup](#online-booking-setup)
2. [Online Booking Deposit Payment Setup](#online-booking-deposit-payment-setup)
3. [Vehicle Data Lookup Region Setup](#vehicle-data-lookup-region-setup)
4. [Get Embed HTML](#get-embed-html)
5. [Get Standalone Page URL](#get-standalone-page-url)


### Online Booking Setup 
To setup online booking:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Online Booking Setup**, and choose the related link.

   ![](media/garagehive-onlinebooking-setup1.png)

2. Under the **General** FastTab, you will see the **Access Token**, **Instance ID**, and whether the setup is enabled.

   ![](media/garagehive-onlinebooking-setup2.png)

3. Adjust the following setting under the **Booking** FastTab:
      - **Minimum Minutes Delay** - This is the time difference between now and the first available booking, i.e., 180 minutes equals a 3-hour delay, implying that at 8 a.m., a customer can make a booking for 11 a.m. that same day.
      - **Max Days in Future** - This is the maximum number of days in the future that bookings can be made.
      - **Default Deal Type Code** - It is recommended that this be set to **OB**. For more information on this feature, please contact a member of the team. 
      - **Customer Recognition Policy** - It is best to set this to **Automatic**. Please contact a member of the team for more information on this feature.
      - **Dummy Customer No.** – Should be set to **Online Booking**.
      - **VAT Bus. Posting Group** – should be set to **Domestic**.
      - **Default Vehicle Status** – Should be set to **Customer**.
      - **Hide Service Prices** – This will hide the sales price of all service packages.
      - **Automatic Booking Confirmation** – If enabled, will send an email and/or SMS confirmation to the customer.
      - **Primary Vehicle Data Lookup Region Code** – In this field, you can select the default vehicle lookup region for online booking from the available regions.

        ![](media/garagehive-onlinebooking-setup3.png)

      - **Hide Service Expected Time** – This hides the expected service times from service packages. (displayed when **More Info** is clicked, along with any extended descriptions set up in the packages).

        ![](media/garagehive-onlinebooking-setup4.gif)

      - **Contact Information & Mileage** - On the last page of the Online Booking form, customers are asked to provide their contact details. You can customise what information is required by adjusting the following fields:
        - **Contact Name Request Option:** Choose between requesting just the name, or a combination of title, first name, and last name. 
        - **Address Request Option:** Select whether to request only the house number and postcode or the full address.
        - **Mileage Request Option:** Choose whether to **Skip** the mileage request, make it **Optional**, or set it as **Mandatory**.
        - **Phone No. Mandatory:** Decide whether the customer must provide a phone number.

         ![](media/garagehive-customer-information.png)

4. Under the **Internal Notification** FastTab, you can set the following:
      - **Send To Emails** – This is usually left blank, but it can be used for additional email recipients; this is for a confirmation email that's sent to the branch.
      - **Send To BCC Emails** – You can use these if you need to BCC the confirmation somewhere else. Multiple addresses can be entered using the ";" character, as in service@thegarage.com;management@thegarage.com.
      - **Send To Branch Email** - It is best practise to check this box, as this will send the confirmation message to the email address specified in the branch setup, which we will do later in the setup.

        ![](media/garagehive-onlinebooking-setup5.png)


[Go back to top](#top)

### Online Booking Deposit Payment Setup
Online booking deposit payments allow customers to secure their bookings with fixed (partial) or full payments. This feature is available only with **Stripe** payment integration. Here is how to set it up:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Online Booking Setup**, and choose the related link.

   ![](media/garagehive-onlinebooking-deposit-payment1.png)

2. On the **Online Booking Setup** page, scroll down to **Deposit Payments** FastTab.
3. Enter the **Payment Gateway Code** for the **Stripe** payment method, select either **Full Amount** or **Fixed Amount**, depending on the prepayment requirement.
   * **Full Payment** - This option requires the customer to pay the full online booking amount as a deposit at the end of the booking process.
   * **Fixed Amount** - This option asks for a specified fixed amount or the total booking amount, whichever is smaller.
1. If you selected **Fixed Amount**, the **Deposit Payment Amount** field will appear. Enter the amount to be paid upfront to secure the booking.

   ![](media/garagehive-onlinebooking-deposit-payment2.png)

2. After adding the **Deposit Payment** setup, a new page will be available in the online booking.

   ![](media/garagehive-onlinebooking-deposit-payment4.png)

3. Once the payment is successful, the payment notification will appear in the **Comments** section of the Jobsheet.

   ![](media/garagehive-onlinebooking-deposit-payment5.png)

4. When the job is complete and you **Take Payment** from the Jobsheet, the deposit paid online will be shown in the **Available Deposit** field.
5. Use the **Apply Deposit Amount** action to apply the deposit to the work in the Jobsheet.

   ![](media/garagehive-onlinebooking-deposit-payment6.png)


[Go back to top](#top)

### Vehicle Data Lookup Region Setup
The Vehicle Data Lookup region setup enables the identification of registration numbers for available regions, allowing customers from those areas to make online bookings. To enable the Vehicle Data Lookup for these regions:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Vehicle Data Lookup Setup**, and choose the related link.

   ![](media/garagehive-vehicle-data-lookup-regions1.png)

2. Scroll down to the **Vehicle Data Lookup Regions** FastTab, and tick the checkbox in the **Activated** column next to the region you want to make available for online booking.

   ![](media/garagehive-vehicle-data-lookup-regions2.png)

3. The regions will now be available in online booking, allowing customers to select their region below the **Registration No.** entry box on the booking page.

   ![](media/garagehive-vehicle-data-lookup-regions3.png)


[Go back to top](#top)

### Get Embed HTML
The **Embed** tag in HTML is used for embedding the booking link to your HTML file (the website). To get the **Embed HTML** link, select **Actions** in the **Online Booking Setup** page, and click on **Get Embed HTML** for online booking or **Get Enquiry Only Embed HTML** for online enquiries.

   ![](media/garagehive-onlinebooking-setup6.png)


[Go back to top](#top)

### Get Standalone Page URL
The **Standalone Page URL** is suitable for businesses that do not have a website to which to add an **Embed HTML** tag. In this case, a **Standalone Page URL** can be used as a dedicated link for booking, such as on social media platforms like Facebook, where a **Book Now** button can be added, and when sending SMS notifications to customers.
To obtain the **Standalone Page URL**, go to the **Online Booking Setup** page and click on **Get Standalone Page URL**. Copy the link and use it to get bookings. You can shorten the link using services such as bitly.

   ![](media/garagehive-onlinebooking-setup7.png)

The **Standalone Page URL** opens a web page, as shown below.

   ![](media/garagehive-onlinebooking-setup8.png)


[Go back to top](#top)

[Previous](/docs/garagehive-onlinebooking-intro.html) | [Next Step](/docs/garagehive-onlinebooking-branches.html)