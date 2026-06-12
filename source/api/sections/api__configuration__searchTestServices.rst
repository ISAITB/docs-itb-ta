The **searchTestServices** operation is used to list test services and apply filtering on the results based on provided search criteria.
To use it make an HTTP ``GET`` to path ``/api/rest/configure/service`` and include in your request an HTTP header named ``ITB-API-KEY``
set to your **community API key**. This API key identifies a community that has access to manage the services' domain, either by being
directly linked to it or by being linked to no domain.

Test service search criteria are passed to this operation as query parameters. The criteria supported and their respective parameters are as follows:

* ``domain``, provided with the API key of the services' domain. If not provided the domain considered by default is the
  one linked to the community identified by the community API key specified through the ``ITB-API-KEY`` header.
* ``key``, the service's key, to be matched exactly.
* ``identifier``, the service's reference identifier, to be matched in a case-insensitive manner and with wildcard matching.
* ``version``, the service's version number, to be matched in a case-insensitive manner and with wildcard matching.
* ``serviceType``, provided as ``messaging``, ``validation`` or ``processing`` to match the service's type.
* ``apiType``, provided as ``soap`` or ``rest`` to match the service's API type.

An an example, to retrieve all validation services linked to a given community you would need to:

* Pass the community's API key as the ``ITB-API-KEY`` header.
* Make a ``GET`` to ``/api/rest/configure/service?serviceType=validation``.

Regardless of the search parameters used in your request, the results are returned as a JSON array of matching test service
definitions:

.. code-block:: json

  [
    {
      "key": "validationService",
      "domain": "491235ECX4F64X4EBDX9392X7726BA2D1297",
      "address": "http://test-services/services/validation?wsdl",
      "serviceType": "validation",
      "apiType": "soap",
      "description": "The validation service used to validate purchase orders."
    },
    {
      "key": "messagingService",
      "domain": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
      "address": "http://test-services/services/messaging?wsdl",
      "serviceType": "messaging",
      "apiType": "soap",
      "description": "The messaging service used to handle sending and receiving of purchase orders."
    }
  ]

More details on the information returned on test services can be found in the operation's :ref:`response schema <api__configuration__searchTestServices__request>`.

.. _api__configuration__searchTestServices__request:

searchTestServices - response schema
++++++++++++++++++++++++++++++++++++

The payload of the **searchTestServices** operation's response is defined by the following :download:`JSON Schema<resources/configuration/searchTestServices_response.schema.json>`:

.. literalinclude:: resources/configuration/searchTestServices_response.schema.json
   :language: json
