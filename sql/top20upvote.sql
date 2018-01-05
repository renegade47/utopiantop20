select top 20 
	author,
	title,
	category,
	url,
	net_votes,
	pending_payout_value,
	children,
	JSON_QUERY(json_metadata, '$.tags')
from 
   Comments (NOLOCK)
where 
   title <> '' and
   parent_author = '' and
   category = 'utopian-io' and
   datediff(hour, created, GETDATE()) between 0 and 2*24
order by 
   net_votes desc