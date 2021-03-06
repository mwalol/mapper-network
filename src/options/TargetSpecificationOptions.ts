export type ScanType = 'list-scan' | 'ping-scan' | 'protocol-scan' | 'proxy-scan'

export interface ScanTypeOption {
    scanType?: ScanType
}

export interface TargetOption {
    target?: string | string[]
}

export interface RandomOption {
    /**
     * Defines the amount of random target to be scanned.
     */
    random?: number
}

export interface ExcludeOption {
    exclude?: string | string[]
}