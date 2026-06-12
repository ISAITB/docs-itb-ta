The **delete** operation is used to delete an organisation's conformance statement. To call the operation make an HTTP ``DELETE``
to path ``/api/rest/conformance/{system}/{actor}`` setting the path placeholders as follows:

* For ``{system}`` use the API key of the system that is currently linked to the statement.
* For ``{actor}`` use the API key of the relevant specification actor.

In addition, you must include in your request an HTTP header named ``ITB-API-KEY`` set with the **organisation's API key**.

As an example, if we want to delete a conformance statement that currently links a system and actor with API keys ``SYSTEM123`` and ``ACTOR456``
you would make a ``DELETE`` to ``/api/rest/conformance/SYSTEM123/ACTOR456``. In terms of response, if the conformance statement was successfully
removed you will receive a ``200`` response with no body.
