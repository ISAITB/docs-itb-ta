.. _manage_your_profile:

Manage your profile
===================

To manage your profile locate in the screen's header the control displaying your user's name. Hovering over this
will expand it to reveal information about your profile and the actions you may take.

.. figure:: ../screenshots/profile_hover.png
  :align: center

How you manage your personal profile depends largely on whether or not you are using an external identity provider to connect to the Test Bed.
Use the following links depending on your case:

* :ref:`Profile management when using an identity provider<manage_your_profile__eulogin>`.
* :ref:`Profile management when not using an identity provider<manage_your_profile__noeulogin>`.

.. note::
  When using an external identity provider you may have more than one user roles linked to your account. Each such role is related
  to different organisations, possibly within different communities. The profile management section of the Test Bed offers
  the means of managing these roles but not your provider's account.

  When not using an identity provider you will have a distinct Test Bed user account per role that you use to log in with. In this case
  your profile management differs as you can also modify this Test Bed specific account.

.. _manage_your_profile__eulogin:

Case: Using an identity provider
--------------------------------

.. note::
  This section is relevant if you are **using an external identity provider** to connect to the Test Bed. Click :ref:`here<manage_your_profile__noeulogin>`
  if this is not the case.

To manage your profile hover over your user's name in the screen's header to see the available options.

.. figure:: ../screenshots/profile_hover_eulogin.png
  :align: center

The popup information displays your name, current role, and three links:

* **My profile:** To :ref:`manage your profile settings<manage_your_profile__edit__eulogin>`.
* **Switch role:** To :ref:`switch your currently connected role<logout__eulogin>`.
* **Logout:** To :ref:`log out from the Test Bed<logout__eulogin>`.

.. _manage_your_profile__edit__eulogin:

Edit your profile
~~~~~~~~~~~~~~~~~

To edit your profile click on the **My profile** link from the header's profile popup.

.. figure:: ../screenshots/profile_hover_eulogin.png
  :align: center

The information you see here includes your name and email address retrieved from your identity provider's account that
cannot be edited within the Test Bed.

.. figure:: ../screenshots/profile_edit_eulogin.png
  :align: center

Besides viewing this information, you can modify here your account preferences. These include:

* Whether the **navigation menu** presented on the left should be collapsed by default.
* Whether :ref:`conformance statements <manage_your_conformance_statements__view_a_conformance_statements_details>` should be presented with **collapsed details** by default.
* The **initial page** presented after you log in, set to either the :ref:`community landing page <navigate__landing_page>` or the :ref:`conformance dashboard <monitor_conformance_status>`.
* The **number of items** to present per page in table displays.

The default values for such user preferences can also be managed as part of your :ref:`community's settings <community>`
to apply to your community's members. Regardless of these defaults however, these preferences can always be changed by
the users themselves.

Clicking on **Save changes** saves the changes to your preferences, and will retain them across logins.

.. note::
  The preferences displayed also change per case depending on your actions. For example, expanding the menu or
  changing the number of displayed items a table will record this choice.

The options in the panel's footer relate to the Test Bed roles linked to your account, specifically:

* **Remove role from your account** is used to remove one or more roles from your account.
* **Link another role to your account** will transfer you to the screen where you can :ref:`link additional roles to your account<login__roles>`.
* **Register another organisation** will transfer you to the screen to :ref:`register another organisation<login__roles__register>`
  in one of the Test Bed's communities (not necessarily the current one). Note that this button may not be available if
  self-registration is disabled by your Test Bed's administrator.

Clicking **Remove role from your account** will present you with a popup in which you are prompted to select the role(s) to remove.

.. figure:: ../screenshots/profile__remove_roles.png
  :align: center
  :scale: 70%

You have three options from which to choose from, each with increasing weight:

* **Deactivate current role:** This will disconnect the current role from your account and effectively deactivate it. You
  will be transferred to the :ref:`listing of your available roles<login__roles>` where you will no longer see the one you just removed.
  Note that this can once again be added to your account by :ref:`confirming again its assignment to you<login__roles__confirm>`.
* **Delete current role:** This deactivates the current role (see above) but also deletes the inactive role. Only an administrator can
  redefine this role for you.
* **Delete all roles:** This deletes not only your current role (see above) but also all other roles you may have linked to your
  account (in other organisations or communities). This effectively wipes all your information from the Test Bed.

The delete options, either for the current role or all roles, provide you the ability to fully manage your own information in the Test Bed.
Removing your information, specifically the email, user ID and name associated to your account can thus be driven by you without
needing to involve other parties. Importantly, deactivating or deleting user roles never impacts the test session history or conformance status
of your organisation.

.. note::
  Each of these actions will also disconnect your current session. You will be prompted to confirm this before proceeding.

  **Updating your role:** Modification of your role can be done only by the Test Bed administrator.

.. _manage_your_profile__noeulogin:

Case: No identity provider
--------------------------

.. note::
  This section is relevant if you are **not using an external identity provider** to connect to the Test Bed. Click :ref:`here<manage_your_profile__eulogin>`
  if this is not the case.

To manage your profile hover over your user's name in the screen's header to see the available options.

.. figure:: ../screenshots/profile_hover.png
  :align: center

The popup information displays your name, current role, and three links:

* **My profile:** To :ref:`manage your profile settings<manage_your_profile__edit>`.
* **Change password:** To :ref:`change your password<manage_your_profile__change_your_password>`.
* **Logout:** To :ref:`log out from the Test Bed<logout__noeulogin>`.

.. _manage_your_profile__edit:

Edit your profile
~~~~~~~~~~~~~~~~~

To edit your profile click on the **My profile** link from the header's profile popup.

.. figure:: ../screenshots/profile_hover.png
  :align: center

Doing so will take you to the profile editing screen where you are presented with your account's information and
preferences.

.. figure:: ../screenshots/profile_edit.png
  :align: center

You see here your **username** and **role**, as well as your **name** which is the only required field.
Below this information you see your account preferences that include:

* Whether the **navigation menu** presented on the left should be collapsed by default.
* Whether :ref:`conformance statements <manage_your_conformance_statements__view_a_conformance_statements_details>` should be presented with **collapsed details** by default.
* The **initial page** presented after you log in, set to either the :ref:`community landing page <navigate__landing_page>` or your :ref:`conformance statements <manage_your_conformance_statements>`.
* The **number of items** to present per page in table displays.

The default values for such user preferences can also be managed as part of your :ref:`community's settings <community>`
to apply to your community's members. Regardless of these defaults however, these preferences can always be changed by
the users themselves.

.. note::
  The preferences displayed also change per case depending on your actions. For example, expanding the menu or
  changing the number of displayed items a table will record this choice.

To record any changes you make click the **Save changes** button, ensuring also like this that you defined preferences
will be retained across logins. You are also presented here with the option to **Register another organisation**. This is a shortcut allowing you to disconnect from your current session and register
another organisation in one of the Test Bed's communities (also not necessarily the current one). If you click this you will
be presented with a confirmation message and then transferred to the :ref:`organisation self-registration page<login__create_account>`.
Note that this button may not be available if self-registration is disabled by your Test Bed's administrator.

.. _manage_your_profile__change_your_password:

Change your password
~~~~~~~~~~~~~~~~~~~~

To change your password click on the **Change password** link from the header's profile popup.

.. figure:: ../screenshots/profile_hover.png
  :align: center

Doing this presents you with a form to enter your current password and the new one.

.. figure:: ../screenshots/password.PNG
  :align: center

The password you provide must meet minimum expected complexity requirements. Specifically:

* It must include at least one lowercase letter, uppercase letter, digit and symbol.
* It must be at least 8 characters long.

When ready click on the **Save** button to complete your password update.