import { createClient } from '@supabase/supabase-js';
import { url, pubkey } from './secrets';

export default createClient(url, pubkey);

