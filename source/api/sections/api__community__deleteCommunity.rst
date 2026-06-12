The **deleteCommunity** operation is used to delete an existing community. To use it make an HTTP ``DELETE`` to path ``/api/rest/community/{community}``,
setting ``{community}`` to the target community's API key. In addition, you must include in your request an HTTP header named
``ITB-API-KEY`` set to your **master API key**.

This operation takes no payload when making a request. If the target community has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.
