The **createTestService** operation is used to define a new test service. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/service``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**. This API key identifies a community
that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In the request's body you specify the information of the test service, of which the ``key``, ``address`` and ``serviceType`` are mandatory as defined
in the payload's :ref:`schema <api__configuration__createTestService__request>`. In case the target domain cannot be determined by the community
linked to the provided ``ITB-API-KEY``, you also need to specify the ``domain`` property, set with the API key of the target domain.

The following example shows how you can create a test service with the provided data:

.. code-block:: json

  {
    "key": "validationService",
    "address": "http://test-services/services/validation?wsdl",
    "serviceType": "validation",
    "description": "The validation service used to validate purchase orders."
  }

Calling this operation, the Test Bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createTestService__request:

createTestService - request schema
++++++++++++++++++++++++++++++++++

The payload of the **createTestService** operation's request is defined by the following :download:`JSON Schema<resources/configuration/createTestService_request.schema.json>`:

.. literalinclude:: resources/configuration/createTestService_request.schema.json
   :language: json
