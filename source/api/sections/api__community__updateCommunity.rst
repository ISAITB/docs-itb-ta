The **updateCommunity** operation is used to update an existing community. It exists in two variants which differ in how the target community is
identified, the updates that you can do, and the API key you will use for authorisation.

The first variant assumes that you are performing an update as a community administrator would. In this case you can only update your own community,
and cannot change the community's assigned domain. You call the operation by making an HTTP ``POST`` to path ``/api/rest/community`` and setting an
HTTP header named ``ITB-API-KEY`` to your **community API key**.

The second variant allows you to perform tasks reserved for the Test Bed administrator. This means that you can select any existing community in the
Test Bed, and also change or remove its assigned domain. In this case you call the operation by making an HTTP ``POST`` to path
``/api/rest/community/{community}``, setting ``{community}`` to the target community's API key. The ``ITB-API-KEY`` HTTP header needs to be set
with the :ref:`master API key <systemAdmin__config__restApi>`.

When calling this operation, regardless of the specific variant, all input properties are optional. You specify the properties that you want to
update, and for the ones that are to be left unchanged you don't include them. In case you want to remove a value, for example unlinking the
community from its current domain, you would specify the property in question as an empty string.

The following example illustrates an update of the community's ``supportEmail``, leaving all other information unchanged:

.. code-block:: json

  {
    "supportEmail": "support-mailbox@eupo.eu"
  }

In case you want to altogether remove the support mailbox, you specify it's value as an empty string:

.. code-block:: json

  {
    "supportEmail": ""
  }

The full set of properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__community__updateCommunity__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__community__updateCommunity__request:

updateCommunity - request schema
++++++++++++++++++++++++++++++++

The payload of the **updateCommunity** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-updateCommunity_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/updateCommunity_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the updateCommunity operation request payload",
       "properties": {
           "shortName": {
               "description": "The community's short name. Skip this if no update should be made.",
               "type": "string"
           },
           "fullName": {
               "description": "The community's full name. Skip this if no update should be made.",
               "type": "string"
           },
           "description": {
               "description": "The community's description. Skip this if no update should be made or set to an empty string to remove the current value.",
               "type": "string"
           },
           "supportEmail": {
               "description": "A support email address to receive community-specific notifications at. Skip this if no update should be made or set to an empty string to remove the current value.",
               "type": "string"
           },
           "interactionNotifications": {
               "description": "Whether to receive notifications for pending interactions by email at the support mailbox (see supportEmail). Skip this if no update should be made.",
               "type": "boolean"
           },
           "domain": {
               "description": "The API key identifying a domain that should be linked to the community. Skip this if no update should be made or set to an empty string to unlink the community from its existing domain (without deleting the domain).",
               "type": "string"
           }
       }
   }
