/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import { NameService } from '../../src/app/name.service.def';
import { NameMemoryService } from '../../src/app/nameMemory/nameMemory.service';
import { Injectable } from '@angular/core';

describe('NameMemoryService', () =>{
    let instance: NameService;
    beforeEach(()=>{
        instance = new NameMemoryService();
    });

    it('should execute Injectable decorator', () =>{
        expect(Injectable).toHaveBeenCalled();
    });

    it('should implement getName function', ()=>{
        expect(instance.getName).not.toBeUndefined();
    });

    describe('getName function, when invoked', () => {
        let retVal: string;
        beforeEach(() => {
            retVal = instance.getName();
        });

        it('should return expected string', () => {
            expect(retVal).toEqual('Fernando');
        });
    });
});
