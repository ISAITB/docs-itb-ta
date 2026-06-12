As a complement to its REST API, the Test Bed also publishes a **health-check endpoint** to facilitate availability monitoring. This
is not listed as a part of the other REST operations, nor does it figure in the :ref:`OpenAPI documentation<api__openapi>` as it is
always available regardless of whether the REST API is enabled or not.

To make a health-check, send a ``GET`` to path ``/api/healthcheck``. If all services are up and running the response will have a code ``200`` (OK) and
empty body.

Besides testing as part of availability monitoring, this operation could also be used as part of automated build scripting to
identify when the Test Bed has completed its initialisation and is ready to receive other API calls.

.. _AUTOMATION_API_ENABLED: https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBedProduction/index.html#configuration-properties
.. _production: https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBedProduction/
.. _development: https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBed/
