The **deleteDomain** operation is used to delete an existing domain. To use it make an HTTP ``DELETE`` to path ``/api/rest/domain/{domain}``,
setting ``{domain}`` to the target domain's API key. In addition, you must include in your request an HTTP header named
``ITB-API-KEY`` set to your :ref:`master API key <systemAdmin__config__restApi>`.

This operation takes no payload when making a request. If the target domain has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.
