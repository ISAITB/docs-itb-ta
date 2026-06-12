The **createDomainProperty** operation is used to define a new domain property. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/domain`` 
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**. This API key identifies a community
that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In the request's body you specify the information of the domain property, of which the ``key`` and ``value`` are mandatory as defined
in the payload's :ref:`schema <api__configuration__createDomainProperty__request>`. In case the target domain cannot be determined by the community
linked to the provided ``ITB-API-KEY``, you also need to specify the ``domain`` property, set with the API key of the target domain.

The following example shows how you can create a domain property with the provided data:

.. code-block:: json

  {
    "key": "validationService",
    "value": "http://test-services/services/validation?wsdl",
    "description": "The WSDL address of the validation service used in test cases."
  }

Calling this operation, the Test Bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createDomainProperty__request:

createDomainProperty - request schema
+++++++++++++++++++++++++++++++++++++

The payload of the **createDomainProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/createDomainProperty_request.schema.json>`:

.. literalinclude:: resources/configuration/createDomainProperty_request.schema.json
   :language: json
