import { describe, it, expect } from 'vitest'
import { flushPromises } from '@vue/test-utils';
import { API_URLS, withSetup } from '@/setupTests.js';
import { useFetch } from '../fetchData.js'
import type { ICharacter, IEpisode } from '@/types.js';
import mockCharacter from "@/components/__tests__/mockCharacter.json";
import mockEpisode from "@/components/__tests__/mockEpisode.json";

describe('useFetch', async () => {
    it('return character data properly', async () => {
        const [result, app] = withSetup<ICharacter>(() => useFetch<ICharacter>(API_URLS.characterUrl))
        
        await flushPromises();
        
        expect(result?.data.value).toEqual(mockCharacter);
        
        app.unmount();
    });
    it('return episode data properly', async () => {
        const [result, app] = withSetup<IEpisode>(() => useFetch<IEpisode>(API_URLS.episodeUrl))
        
        await flushPromises();
        
        expect(result?.data.value).toEqual(mockEpisode);
        
        app.unmount();
    });
});